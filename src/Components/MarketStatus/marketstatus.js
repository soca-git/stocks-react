import './marketstatus.css';

function MarketStatus(props)
{
    return(
        <div className="component market-status">
            <h4 className="market-status-status">Market {props.marketStatus?.status ?? "-"}</h4>
        </div>
    );
}

export default MarketStatus;