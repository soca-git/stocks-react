import './stockadditionalinfo.css';
import { FormatMarketCap, FormatVolume } from '../../Utils/stockdataformatter.js';

function StockAdditionalInfo(props)
{
    return (
        <div className="component additional-info">
            <table>
                <tbody>
                    <tcol>
                        <div><th>Open</th><td>{props.activeStockAdvancedQuote?.openPrice}</td></div>
                        <div><th>High</th><td>{props.activeStockAdvancedQuote?.highPrice}</td></div>
                        <div><th>Low</th><td>{props.activeStockAdvancedQuote?.lowPrice}</td></div>
                    </tcol>
                    <tcol>
                        <div><th>Vol</th><td>{FormatVolume(props.activeStockAdvancedQuote?.volume)}</td></div>
                        <div><th>P/E</th><td>{props.activeStockAdvancedQuote?.pricePerEarningsRatio}</td></div>
                        <div><th>Mkt Cap</th><td>{FormatMarketCap(props.activeStockAdvancedQuote?.marketCap)}</td></div>
                    </tcol>
                    <tcol>
                        <div><th>52W H</th><td>{props.activeStockAdvancedQuote?.fiftyTwoWeekHigh}</td></div>
                        <div><th>52W L</th><td>{props.activeStockAdvancedQuote?.fiftyTwoWeekLow}</td></div>
                        <div><th>Avg Vol</th><td>{FormatVolume(props.activeStockAdvancedQuote?.averageVolume)}</td></div>
                    </tcol>
                    <tcol>
                        <div><th>Yield</th><td>{props.activeStockAdvancedQuote?.yield}</td></div>
                        <div><th>Beta</th><td>{props.activeStockAdvancedQuote?.beta}</td></div>
                        <div><th>EPS</th><td>{props.activeStockAdvancedQuote?.earningsPerShare}</td></div>
                    </tcol>
                </tbody>
            </table>
        </div>
    );
}

export default StockAdditionalInfo;