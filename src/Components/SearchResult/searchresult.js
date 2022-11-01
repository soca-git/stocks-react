import './searchresult.css';
import { FormatPrice } from '../../Utils/stockdataformatter.js'

function SearchResult(props)
{
    let deltaClassName = "search-result-delta";
    let deltaSymbol;

    if (props.activeStockPreview?.currentDelta >= 0)
    {
        deltaClassName += " search-result-delta-positive";
        deltaSymbol = "+";
    }
    else
    {
        deltaClassName += " search-result-delta-negative";
        deltaSymbol = "";
    }

    return (
        <li key={props.key} className="component search-result">
            <button value={props.activeStockPreview?.tickerSymbol} onClick={(event) => props.setActiveStockFunction(event.target.value)}>
                <div>
                    <div className="search-result-top">
                        <div className="search-result-symbol">{props.activeStockPreview?.tickerSymbol}</div>
                        <div className="search-result-currency">{props.activeStockPreview?.currency}</div>
                    </div>
                    <div className="search-result-name">{props.activeStockPreview?.name}</div>
                </div>
                <div>
                    <div className="search-result-price">{FormatPrice(props.activeStockPreview?.currentPrice)}</div>
                    <div className={deltaClassName}>{deltaSymbol}{FormatPrice(props.activeStockPreview?.currentDelta)}</div>
                </div>
            </button>
        </li>
    );
}

export default SearchResult;