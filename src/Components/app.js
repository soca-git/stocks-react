import React from "react";
import './app.css';
import * as clients from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";
import MarketStatus from "./MarketStatus/marketstatus";
import StockAdditionalInfo from "./StockAdditionalInfo/stockadditionalinfo";
import SearchResult from "./SearchResult/searchresult";
import SearchBar from "./SearchBar/searchbar";
import Chart from "./Chart/chart";
import StockNewsArticle from "./StockNewsArticle/stocknewsarticle";

const initialState = {
    TickerSymbols: null,
    SearchFragment: "QCOM",
    ActiveStockTickerSymbol: "QCOM",
    ActiveStockQuote: null,
    ActiveStockAdvancedQuote: null,
    MarketStatus: null,
    SearchResults: null,
    ActiveStockChartData: null,
    ActiveStockNews: null
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
        //this.retrieveTickerSymbols();
        this.retrieveSearchResults();
        this.updateActiveStock();
    }

    setSearchFragment(event)
    {
        this.setState({ SearchFragment: event.target.value },
            () => { this.retrieveSearchResults() });
    }

    setActiveStock(symbol)
    {
        this.setState({ ActiveStockTickerSymbol: symbol },
            () => { this.updateActiveStock() });
    }

    updateActiveStock()
    {
        this.retrieveMarketStatus();
        this.retrieveQuote();
        this.retrieveAdvancedQuote();
        this.retrieveChartData();
        this.retrieveNews();
    }

    async retrieveSearchResults()
    {
        let client = new clients.StockSearchClient();
        await client
            .get(this.state.SearchFragment)
            .then(data => this.setState({ SearchResults: data }));
    }

    async retrieveMarketStatus()
    {
        let client = new clients.MarketStatusClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ MarketStatus: data }));
    }

    async retrieveTickerSymbols()
    {
        let client = new clients.TickerSymbolsClient()
        await client
            .get()
            .then(data => this.setState({ TickerSymbols: data }));
    }

    async retrieveQuote()
    {
        let client = new clients.StockQuoteClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockQuote: data }));
    }

    async retrieveAdvancedQuote()
    {
        let client = new clients.StockAdvancedQuoteClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockAdvancedQuote: data }));
    }

    async retrieveChartData()
    {
        let client = new clients.HistoricalStockPricesClient();
        await client
            .get(this.state.ActiveStockTickerSymbol, "FiveDay")
            .then(data => this.setState({ ActiveStockChartData: data }));
    }

    async retrieveNews()
    {
        let client = new clients.HistoricalStockNewsClient();
        await client
            .get(this.state.ActiveStockTickerSymbol, "PastWeek", 5)
            .then(data => this.setState({ ActiveStockNews: data }));
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
                            {this.state?.SearchResults?.map((searchResult) => 
                                <SearchResult key={searchResult?.tickerSymbol} activeStockPreview={searchResult} setActiveStockFunction={(symbol) => this.setActiveStock(symbol)} />
                            )}
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
                        <Chart data={this.state.ActiveStockChartData} />
                        <StockAdditionalInfo activeStockAdvancedQuote={this.state.ActiveStockAdvancedQuote} />
                        <div className="news-articles">
                            <ul>
                                {this.state?.ActiveStockNews?.map((newsArticle) => 
                                    <StockNewsArticle key={newsArticle?.headline} newsArticle={newsArticle} />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;