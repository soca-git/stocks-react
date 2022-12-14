import './stockinfo.css';

function StockInfo(props)
{
    return(
        <div className="component stock-info">
            <div className="stock-info-title">
                <h2>{props.activeStockQuote?.tickerSymbol}</h2>
                <h3>{props.activeStockQuote?.name}</h3>
            </div>
            <div className="stock-info-metadata">
                <h3>{props.activeStockQuote?.market}</h3>
                <h4>&#9679;</h4>
                <h3>{props.activeStockQuote?.currency}</h3>
            </div>
        </div>
    );
}

export default StockInfo;
