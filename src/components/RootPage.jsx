import React from "react";
import Header from "./Header";
import { NavLink, Outlet } from "react-router-dom";

function RootPage() {
  return (
    <div className="root-page">
      <Header />
      <div className="container grid justify-content-center align-items-center wh-100 text-center m-5">
        <h1>Find a Brewery Close to you</h1>
        <NavLink
          className="btn btn-outline-secondary btn-lg"
          to="/find-brewery"
        >
          Find one now
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default RootPage;
