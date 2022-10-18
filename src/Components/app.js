import React from "react";
import { StockSearchClient } from "../stocks-api-client.ts";

import StockInfo from "./StockInfo/stockInfo";
import StockPrice from "./StockPrice/stockprice";

const initialState = {
    ActiveStockTickerSymbol: "QCOM",
    ActiveStockPreview: null,
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
    }

    async searchStock()
    {
        let client = new StockSearchClient();
        await client
            .get(this.state.ActiveStockTickerSymbol)
            .then(data => this.setState({ ActiveStockPreview: data[0], SearchResults: data }));
    }

    render()
    {
        return(
            <div>
                <StockInfo activeStockPreview={this.state.ActiveStockPreview} />
                <StockPrice activeStockPreview={this.state.ActiveStockPreview} />
            </div>
        );
    }
}

export default App;
