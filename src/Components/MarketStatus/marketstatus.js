import './marketstatus.css';

function MarketStatus(props)
{
    return(
        <div className="component market-status">
            <h3>Market</h3>
            <h3 className="market-status-status">{props.marketStatus?.status}</h3>
        </div>
    );
}

export default MarketStatus;