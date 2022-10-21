import React from "react";
import './app.css';
import { TickerSymbolsClient, StockSearchClient, MarketStatusClient, StockAdvancedQuoteClient } from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";
import MarketStatus from "./MarketStatus/marketstatus";
import StockAdditionalInfo from "./StockAdditionalInfo/stockadditionalinfo";
import SearchResult from "./SearchResult/searchresult";

const initialState = {
    ActiveStockTickerSymbol: "QCOM",
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
        this.updateMarketStatus();
        this.retrieveAdvancedQuote();
    }

    async searchStock()
    {
        let client = new StockSearchClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockPreview: data[0], SearchResults: data }));
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

    async retrieveTickerSymbols()
    {
        let client = new TickerSymbolsClient()
        await client
            .get()
            .then(data => this.setState({ TickerSymbols: data }));
    }

    render()
    {
        return(
            <div className="app">
                <div className="side-bar">
                    <div className="component search">&#128296;</div>
                    <div className="side-bar-spacer"></div>
                    <div className="search-results">
                        <ul>
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                            <SearchResult activeStockPreview={this.state.ActiveStockPreview} />
                        </ul>
                    </div>
                    <div className="side-bar-spacer"></div>
                    <div className="side-bar-bottom">
                        <div className="component title">IEXCloud</div>
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
