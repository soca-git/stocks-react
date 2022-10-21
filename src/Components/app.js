import React from "react";
import './app.css';
import { TickerSymbolsClient, StockSearchClient, MarketStatusClient, StockAdvancedQuoteClient } from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";
import MarketStatus from "./MarketStatus/marketstatus";
import StockAdditionalInfo from "./StockAdditionalInfo/stockadditionalinfo";
import SearchResult from "./SearchResult/searchresult";
import SearchBar from "./SearchBar/searchbar";

const initialState = {
    SearchFragment: "BB",
    ActiveStockTickerSymbol: null,
    ActiveStockPreview: null,
    ActiveStockAdvancedQuote: null,
    MarketStatus: null,
    SearchResults: null,
    TickerSymbols: null
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
        this.searchStock();
    }

    async retrieveTickerSymbols()
    {
        let client = new TickerSymbolsClient()
        await client
            .get()
            .then(data => this.setState({ TickerSymbols: data }));
    }

    setSearchFragment(event)
    {
        console.log(event.target.value);
        this.setState({ SearchFragment: event.target.value },
            () => { this.searchStock() });
    }

    async searchStock()
    {
        let client = new StockSearchClient();
        await client
            .get(this.state.SearchFragment)
            .then(data => this.setState({
                ActiveStockTickerSymbol: data[0].tickerSymbol,
                ActiveStockPreview: data[0],
                SearchResults: data
            }, () => {this.updateAfterSearch()}));
    }

    async updateAfterSearch()
    {
        this.updateMarketStatus();
        this.retrieveAdvancedQuote();
    }

    async updateMarketStatus()
    {
        let client = new MarketStatusClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ MarketStatus: data}));
    }

    async retrieveAdvancedQuote()
    {
        let client = new StockAdvancedQuoteClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockAdvancedQuote: data}));
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
                            <StockInfo activeStockPreview={this.state.ActiveStockPreview} />
                            <StockPrice activeStockPreview={this.state.ActiveStockPreview} marketStatus={this.state.MarketStatus} />
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
