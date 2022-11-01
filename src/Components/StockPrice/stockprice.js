import './stockprice.css';
import { FormatPrice } from '../../Utils/stockdataformatter.js';

function StockPrice(props)
{
    let priceDelta = <h3 className="stock-price-delta stock-price-delta-negative">{FormatPrice(props.activeStockQuote?.currentDelta)}</h3>;
    let priceSource = <div className="stock-price-source">-</div>

    if (props.activeStockQuote?.currentDelta >= 0)
    {
        priceDelta = <h3 className="stock-price-delta stock-price-delta-positive">+{FormatPrice(props.activeStockQuote?.currentDelta)}</h3>;
    }

    if (props.marketStatus?.status === "Open")
    {
        priceSource = <div className="stock-price-source">Live</div>
    }
    else if (props.marketStatus?.status === "Closed")
    {
        priceSource = <div className="stock-price-source">At Close</div>
    }

    return(
        <div className="component stock-price">
            <div className="stock-price-top">
                <h3 className="stock-price-current">{FormatPrice(props.activeStockQuote?.currentPrice)}</h3>
                {priceDelta}
            </div>
            {priceSource}
        </div>
    );
}

export default StockPrice;