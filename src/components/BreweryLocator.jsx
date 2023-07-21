import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrewery, fetchBreweryDetails } from "../feature/BrewerySlice";
import { NavLink } from "react-router-dom";

function BreweryLocator() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedBrewery, setSelectedBrewery] = useState([]);
  const changeSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchLocationHandler = () => {
    dispatch(fetchBrewery(search));
  };
  const addSelectedItemHandler = (brewery) => {
    // dispatch(fetchBreweryDetails(search))
    // dispatch()
    setSelectedBrewery([brewery]);
  };
  const breweryDetails = useMemo(() => {
    if (selectedBrewery !== undefined) {
      return selectedBrewery.map((item) => (
        <div className="container" key={item.id}>
          <h2>{item.name}</h2>
          <div className="details">
            <h5>
              Address: {item.address_1} {item.city} {item.postal_code}{" "}
              {item.country}
            </h5>
            <h5>Phone: {item.phone}</h5>
            <h5>Website: {item.website_url}</h5>
          </div>
        </div>
      ));
    }
    return <div className="container">Select A Brewery</div>;
  }, [selectedBrewery]);
  const breweryLocationData = useSelector((state) => state.recipe.searchValues);
  const breweryLocation = useMemo(() => {
    if (breweryLocationData.length !== 0) {
      return breweryLocationData.map((item) => (
        <NavLink
          key={item.id}
          className="card text-decoration-none p-2"
          onClick={() => addSelectedItemHandler(item)}
        >
          {item.name}
        </NavLink>
      ));
    } else {
      return <div className="container border">Input a location</div>;
    }
  }, [breweryLocationData]);
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
        <div className="col-4 border h-100 py-4 px-3 overflow-scroll ">
          <input
            className="w-100 form-control bg-light-subtle"
            placeholder="Location.."
            value={search}
            type="text"
            onChange={changeSearchHandler}
          />
          <button
            className="my-3 w-100 btn btn-lg btn-outline-secondary d-grid place-items-center"
            onClick={searchLocationHandler}
          >
            Search Nearby Brewery
          </button>
          <div className="results container w-100 d-flex flex-column gap-3 ">
            {breweryLocation}
            {/* <div className="container text-center border">
              <div className="name">Name</div>
              <div className="address">Address</div>
            </div> */}
          </div>
        </div>
        <div className="map-locator col border p-2">{breweryDetails}</div>
      </div>
    </div>
  );
}

export default BreweryLocator;
