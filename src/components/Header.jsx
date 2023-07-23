import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const wishlistCount = useSelector((state) => state.brewery.wishlistCount);
  const wishListCounter = useMemo(() => {
    if (wishlistCount === 0) {
      return;
    } else {
      return <div className="wishlistCount d-inline">{wishlistCount}</div>;
    }
  }, [wishlistCount]);
  return (
    <header>
      <nav
        className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
        data-bs-theme="dark"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="#offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="#offcanvas"
            aria-labelledby="#offcanvasLabel"
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
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/find-brewery">
                    Find A Brewery
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/wishlist">
                    Wishlist
                  </NavLink>
                  <div>{}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
