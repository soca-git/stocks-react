import './stockinfo.css';

function StockInfo(props)
{
    return(
        <div className="stock-info">
            <div className="stock-info-title">
                <h2>{props.activeStock.TickerSymbol}</h2>
                <h3>{props.activeStock.Name}</h3>
            </div>
            <h3>{props.activeStock.CurrencyCode}</h3>
        </div>
    );
}

export default StockInfo;
