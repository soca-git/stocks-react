import './searchbar.css';

function SearchBar(props)
{
    return(
        <div className="component search-bar">
            <i>&#128269;</i>
            <input type="text" placeholder="Search" onChange={(event) => props.searchFunction(event)}></input>
        </div>
    );
}

export default SearchBar;