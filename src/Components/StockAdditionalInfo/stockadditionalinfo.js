import './stockadditionalinfo.css';
import { FormatMarketCap, FormatVolume } from '../../Utils/stockdataformatter.js';

function StockAdditionalInfo(props)
{
    return (
        <div className="component additional-info">
            <table>
                <tbody>
                    <tr><th>Open</th><td>{props.activeStockAdvancedQuote?.openPrice ?? "-"}</td></tr>
                    <tr><th>High</th><td>{props.activeStockAdvancedQuote?.highPrice ?? "-"}</td></tr>
                    <tr><th>Low</th><td>{props.activeStockAdvancedQuote?.lowPrice ?? "-"}</td></tr>
                </tbody>
                <tbody>
                    <tr><th>Vol</th><td>{FormatVolume(props.activeStockAdvancedQuote?.volume) ?? "-"}</td></tr>
                    <tr><th>P/E</th><td>{props.activeStockAdvancedQuote?.pricePerEarningsRatio ?? "-"}</td></tr>
                    <tr><th>Mkt Cap</th><td>{FormatMarketCap(props.activeStockAdvancedQuote?.marketCap ?? "-")}</td></tr>
                </tbody>
                <tbody>
                    <tr><th>52W H</th><td>{props.activeStockAdvancedQuote?.fiftyTwoWeekHigh ?? "-"}</td></tr>
                    <tr><th>52W L</th><td>{props.activeStockAdvancedQuote?.fiftyTwoWeekLow ?? "-"}</td></tr>
                    <tr><th>Avg Vol</th><td>{FormatVolume(props.activeStockAdvancedQuote?.averageVolume) ?? "-"}</td></tr>
                </tbody>
                <tbody>
                    <tr><th>Yield</th><td>{props.activeStockAdvancedQuote?.yield ?? "-"}</td></tr>
                    <tr><th>Beta</th><td>{props.activeStockAdvancedQuote?.beta ?? "-"}</td></tr>
                    <tr><th>EPS</th><td>{props.activeStockAdvancedQuote?.earningsPerShare ?? "-"}</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default StockAdditionalInfo;