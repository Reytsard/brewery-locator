import React from "react";
import Map from "./Map";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <div className="root-page">
      <Header />
      <Outlet />
    </div>
    // <div className="container w-100 h-100 p-3">
    //   <div className="h-100 row">
    //     <div className="col">{/* <Map /> */}</div>
    //     <div className="col">ToorPage</div>
    //   </div>
    // </div>
  );
}

export default RootPage;
