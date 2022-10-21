import './searchresult.css';

function SearchResult(props)
{
    var deltaClassName = "search-result-delta";
    var deltaSymbol;

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
        <div className="component search-result">
            <li key={props.activeStockPreview?.tickerSymbol}>
                <div>
                    <div className="search-result-top">
                        <div className="search-result-symbol">{props.activeStockPreview?.tickerSymbol}</div>
                        <div className="search-result-currency">{props.activeStockPreview?.currency}</div>
                    </div>
                    <div className="search-result-name">{props.activeStockPreview?.name}</div>
                </div>
                <div>
                    <div className="search-result-price">{props.activeStockPreview?.currentPrice}</div>
                    <div className={deltaClassName}>{deltaSymbol}{props.activeStockPreview?.currentDelta}</div>
                </div>
            </li>
        </div>
    );
}

export default SearchResult;