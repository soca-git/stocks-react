import React from "react";
import StockInfo from "./StockInfo/stockInfo";

const initialState = {
    activeStock: {
        TickerSymbol: "QCOM",
        Name: "Qualcomm Technologies",
        CurrencyCode: "USD"
    },
};

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = initialState;
    }

    render()
    {
        return(
            <div>
                <StockInfo activeStock={this.state.activeStock} />
            </div>
        );
    }
}

export default App;
