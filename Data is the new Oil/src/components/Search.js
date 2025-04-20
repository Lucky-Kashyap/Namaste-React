const Search = () => {
  const hanldeClick = () => {
    console.log("click handle");
  };
  return (
    <div className="search-box">
      <input type="text" />
      <button className="filter-btn" onClick={hanldeClick}>
        Top Rated Restaurant
      </button>
    </div>
  );
};

export default Search;
