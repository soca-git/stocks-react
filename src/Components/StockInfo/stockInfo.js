import './stockinfo.css';

function StockInfo(props)
{
    return(
        <div className="component stock-info">
            <div className="stock-info-title">
                <h2>{props.activeStockPreview?.tickerSymbol}</h2>
                <h3>{props.activeStockPreview?.name}</h3>
            </div>
            <h3>{props.activeStockPreview?.currency}</h3>
        </div>
    );
}

export default StockInfo;
