import Navbar from "./NaBar";
import SearchForm from "./SearchForm";
function Header() {
  return (
    <div className="header">
      <Navbar/>
      <div className="header__content">
        <SearchForm/>
        <h1>What are your favorite cuisines?</h1>
        <p>personalize your experience</p>
      </div>
    </div>
  )
}

export default Header;
