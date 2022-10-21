import './stockprice.css';

function StockPrice(props)
{
    let priceDelta = <h3 className="stock-price-delta stock-price-delta-negative">{props.activeStockPreview?.currentDelta}</h3>;
    let priceSource = <div className="stock-price-source">At Close</div>

    if (props.activeStockPreview?.currentDelta >= 0)
    {
        priceDelta = <h3 className="stock-price-delta stock-price-delta-positive">+{props.activeStockPreview?.currentDelta}</h3>;
    }

    if (props.marketStatus?.status == "Open")
    {
        priceSource = <div className="stock-price-source">Live</div>
    }

    return(
        <div className="component stock-price">
            <div className="stock-price-top">
                <h3 className="stock-price-current">{props.activeStockPreview?.currentPrice}</h3>
                {priceDelta}
            </div>
            {priceSource}
        </div>
    );
}

export default StockPrice;