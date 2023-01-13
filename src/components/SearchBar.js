function SearchBar() {
    return (
    <div className="simpleFlexContainer">
      <div className="container">
        <img className="icon" src="search.png" alt="search"/>
        <input className="searchBox" type="search" name="search" placeholder="Enter name"/>
        <input className="searchButton" value="Search" type="submit"/>
      </div>
    </div>
    );
  }
  
  export default SearchBar;
  