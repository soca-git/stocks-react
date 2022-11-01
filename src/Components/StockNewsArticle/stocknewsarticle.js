import './stocknewsarticle.css';

function StockNewsArticle(props)
{
    return(
        <li key={props.key} className="component stock-news-article">
            <a href={props.newsArticle?.url} target="_blank" rel="noopener noreferrer">{props.newsArticle?.headLine}</a>
            <div className="stock-news-article-middle">
                <div className="stock-news-article-source">{props.newsArticle?.source}</div>
                <div>{props.newsArticle?.timeStamp.toDateString()}</div>
            </div>            
        </li>
    );
}

export default StockNewsArticle;