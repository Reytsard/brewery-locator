import React, { useState } from "react";

function BreweryLocator() {
  const [search, setSearch] = useState("");
  const changeSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="brewery-locator">
      <div className="row w-100 d-flex flex-column py- g-0">
        <h2 className="d-flex align-items-center justify-content-center">
          Brewery Location
        </h2>
        <span className="d-flex align-items-center justify-content-center">
          Locate a brewery right now
        </span>
      </div>
      <div className="search-bar px-2 g-0 row d-flex justify-content-center align-items-center">
        <div className="col-4 border h-100 py-4 px-3">
          <input
            className="w-100 form-control bg-light-subtle"
            placeholder="Location.."
            value={search}
            type="text"
            onChange={changeSearchHandler}
          />
          <button className="btn btn-lg d-grid place-items-center">
            Search Nearby Brewery
          </button>
          <div className="results container"></div>
        </div>
        <div className="map-locator col border p-2">Map here</div>
      </div>
    </div>
  );
}

export default BreweryLocator;
