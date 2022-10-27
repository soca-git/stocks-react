import React from "react";
import './app.css';
import { TickerSymbolsClient, StockSearchClient, MarketStatusClient, StockQuoteClient, StockAdvancedQuoteClient } from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";
import MarketStatus from "./MarketStatus/marketstatus";
import StockAdditionalInfo from "./StockAdditionalInfo/stockadditionalinfo";
import SearchResult from "./SearchResult/searchresult";
import SearchBar from "./SearchBar/searchbar";

const initialState = {
    TickerSymbols: null,
    SearchFragment: "BB",
    ActiveStockTickerSymbol: null,
    ActiveStockQuote: null,
    ActiveStockAdvancedQuote: null,
    MarketStatus: null,
    SearchResults: null,
};

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = initialState;
    }

    componentDidMount()
    {
        this.retrieveTickerSymbols();
        this.retrieveSearchResults();
    }

    setSearchFragment(event)
    {
        this.setState({ SearchFragment: event.target.value },
            () => { this.retrieveSearchResults() });
    }

    setActiveStock(event)
    {
        console.log(event.target.value);
        this.setState({ ActiveStockTickerSymbol: event.target.value },
            () => { this.updateActiveStock() });
    }

    updateActiveStock()
    {
        this.retrieveMarketStatus();
        this.retrieveQuote();
        this.retrieveAdvancedQuote();
    }

    async retrieveSearchResults()
    {
        let client = new StockSearchClient();
        await client
            .get(this.state.SearchFragment)
            .then(data => this.setState({ ActiveStockTickerSymbol: data[0].tickerSymbol, SearchResults: data},
                () => { this.updateActiveStock() }));
    }

    async retrieveMarketStatus()
    {
        let client = new MarketStatusClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ MarketStatus: data}));
    }

    async retrieveTickerSymbols()
    {
        let client = new TickerSymbolsClient()
        await client
            .get()
            .then(data => this.setState({ TickerSymbols: data }));
    }

    async retrieveQuote()
    {
        let client = new StockQuoteClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockAdvancedQuote: data}));
    }

    async retrieveAdvancedQuote()
    {
        let client = new StockAdvancedQuoteClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockQuote: data}));
    }

    render()
    {
        return(
            <div className="app">
                <div className="side-bar">
                    <SearchBar searchFunction={(event) => this.setSearchFragment(event)} />
                    <div className="side-bar-spacer"></div>
                    <div className="search-results">
                        <ul>
                            {this.state?.SearchResults?.map((searchResult) => <SearchResult activeStockPreview={searchResult} />)}
                        </ul>
                    </div>
                    <div className="side-bar-spacer"></div>
                    <div className="side-bar-bottom">
                        <div className="app-name">IEXCloud</div>
                        <MarketStatus marketStatus={this.state.MarketStatus} />
                    </div>
                </div>
                <div className="main-content">
                    <div className="main-content-top">
                        <div className="main-content-top-spacer"></div>
                        <div className="main-content-top-body">
                            <StockInfo activeStockQuote={this.state.ActiveStockQuote} />
                            <StockPrice activeStockQuote={this.state.ActiveStockQuote} marketStatus={this.state.MarketStatus} />
                        </div>
                    </div>
                    <div className="main-content-bottom">
                        <div className="component chart">&#128296;</div>
                        <StockAdditionalInfo activeStockAdvancedQuote={this.state.ActiveStockAdvancedQuote} />
                        <div className="component news">&#128296;</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;