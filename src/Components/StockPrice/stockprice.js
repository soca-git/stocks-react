import './stockprice.css';

function StockPrice(props)
{
    return(
    <div className="component stock-price">
        <h3 className="stock-price-current">{props.activeStockPreview?.currentPrice}</h3>
        <h3 className="stock-price-delta">{props.activeStockPreview?.currentDelta}</h3>
    </div>
    );
}

export default StockPrice;
