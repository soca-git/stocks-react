import './stocknewsarticle.css';

function StockNews(props)
{
    return(
        <li className="component stock-news-article">
            <a href={props.newsArticle?.url} target="_blank" rel="noopener noreferrer">{props.newsArticle?.headLine}</a>
            <div className="stock-news-article-middle">
                <div className="stock-news-article-source">{props.newsArticle?.source}</div>
                <div>{props.newsArticle?.timeStamp.toDateString()}</div>
            </div>            
        </li>
    );
}

export default StockNews;