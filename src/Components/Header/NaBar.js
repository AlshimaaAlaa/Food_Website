import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <Link  to="/" className="navbar-brand fw-bold text-light " href="#" style={{fontSize:"26px" , fontFamily:"cursive"}}>
        🍽️ FastEat.
        </Link>
        <button  style={{border:"none"}}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/categories/Beef" className="nav-link active "  aria-current="page">
                  Beef
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/categories/Chicken" className="nav-link" >
                  Chicken
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Desert" className="nav-link" >
                  Desert
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Lamb" className="nav-link" >
                  Lamb
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Miscellaneous" className="nav-link" >
                  Miscellaneous
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Pasta" className="nav-link" >
                  Pasta
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Pork" className="nav-link" >
                  Pork
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Seafood" className="nav-link" >
                  Seafood
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Side" className="nav-link" >
                  Side
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Starter" className="nav-link" >
                  Starter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Vegen" className="nav-link" >
                  Vegen
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/categories/Vegetarian" >
                  Vegetarian
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Breackfast" className="nav-link" >
                  Breackfast
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories/Goat" className="nav-link" >
                  Goat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
