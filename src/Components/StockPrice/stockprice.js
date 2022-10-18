import './stockprice.css';

function StockPrice(props)
{
    var deltaClassName = props.activeStockPreview?.currentDelta >= 0 ? "stock-price-delta-positive" : "stock-price-delta-negative";

    return(
        <div className="component stock-price">
            <h3 className="stock-price-current">{props.activeStockPreview?.currentPrice}</h3>
            <h3 className={deltaClassName}>{props.activeStockPreview?.currentDelta}</h3>
        </div>
    );
}

export default StockPrice;
