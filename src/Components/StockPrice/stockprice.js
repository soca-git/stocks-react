import './stockprice.css';

function StockPrice(props)
{
    var deltaClassName;
    var deltaSymbol;

    if (props.activeStockPreview?.currentDelta >= 0)
    {
        deltaClassName = "stock-price-delta-positive";
        deltaSymbol = "+";
    }
    else
    {
        deltaClassName = "stock-price-delta-negative";
        deltaSymbol = "";
    }

    return(
        <div className="component stock-price">
            <h3 className="stock-price-current">{props.activeStockPreview?.currentPrice}</h3>
            <h3 className={deltaClassName}>{deltaSymbol}{props.activeStockPreview?.currentDelta}</h3>
        </div>
    );
}

export default StockPrice;
