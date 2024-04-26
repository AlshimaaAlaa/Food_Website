import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the Meals page with the search query as a parameter
    navigate(`/categories/${searchQuery}`);
  };

  return (
    <form className="m-5 search-form" onSubmit={handleSearch}>
      <input
        type="text"
        className="input p-3 rounded-5 border-0"
        placeholder="Search recipes here ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search rounded-5 p-3 border-0 ms-4">
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
}

export default SearchForm;
