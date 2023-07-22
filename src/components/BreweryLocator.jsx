import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrewery,
  setLatitude,
  setLongitude,
} from "../feature/BrewerySlice";
import { NavLink } from "react-router-dom";
import Map from "./Map";
import "../styles/main.css";

function BreweryLocator() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedBrewery, setSelectedBrewery] = useState({});
  const changeSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchLocationHandler = () => {
    dispatch(fetchBrewery(search));
  };
  const addSelectedItemHandler = (brewery) => {
    setSelectedBrewery(Object.assign(brewery));
  };
  const mapDetails = useMemo(() => {
    if (selectedBrewery.longitude === null) {
      return <div className="container">no map marker for this business</div>;
    } else {
      dispatch(setLatitude(parseFloat(selectedBrewery.latitude)));
      dispatch(setLongitude(parseFloat(selectedBrewery.longitude)));
      return <Map />;
    }
  }, [selectedBrewery, dispatch]);
  const breweryDetails = useMemo(() => {
    if (Object.keys(selectedBrewery).length !== 0) {
      return (
        <div className="container w-100 h-100" key={selectedBrewery.id}>
          <div className="row">
            <h2 className="text-center my-4">{selectedBrewery.name}</h2>
            <div className="details">
              <h5>
                Address: {selectedBrewery.address_1} {selectedBrewery.city}{" "}
                {selectedBrewery.postal_code} {selectedBrewery.country}
              </h5>
              <h5>Phone: {selectedBrewery.phone}</h5>
              <h5>Website: {selectedBrewery.website_url}</h5>
            </div>
          </div>
          <div className="row map-size">{mapDetails}</div>
        </div>
      );
    }
    return <div className="container h-100 text-center ">Select A Brewery</div>;
  }, [selectedBrewery, mapDetails]);
  const breweryLocationData = useSelector(
    (state) => state.brewery.searchValues
  );
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
          </div>
        </div>
        <div className="map-locator col border p-2">{breweryDetails}</div>
      </div>
    </div>
  );
}

export default BreweryLocator;
