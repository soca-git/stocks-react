import React from "react";
import './app.css';
import { StockSearchClient, MarketStatusClient } from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";
import MarketStatus from "./MarketStatus/marketstatus";

const initialState = {
    ActiveStockTickerSymbol: "QCOM",
    ActiveStockPreview: null,
    MarketStatus: null,
    SearchResults: null
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
        this.searchStock();
        this.updateMarketStatus();
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
            .then(data => this.setState({ MarketStatus: data}))
    }

    render()
    {
        return(
            <div className="app">
                <div className="side-bar">
                    <div className="component search">&#128296;</div>
                    <div className="component search-results">&#128296;</div>
                    <div className="side-bar-bottom">
                        <div className="component title">IEXCloud</div>
                        <MarketStatus marketStatus={this.state.MarketStatus} />
                    </div>
                </div>
                <div className="top-bar">
                    <div className="top-bar-spacer"></div>
                    <div className="top-bar-content">
                        <StockInfo activeStockPreview={this.state.ActiveStockPreview} />
                        <StockPrice activeStockPreview={this.state.ActiveStockPreview} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
