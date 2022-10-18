import React from "react";
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
            <div>
                <StockInfo activeStockPreview={this.state.ActiveStockPreview} />
                <StockPrice activeStockPreview={this.state.ActiveStockPreview} />
                <MarketStatus marketStatus={this.state.MarketStatus} />
            </div>
        );
    }
}

export default App;
