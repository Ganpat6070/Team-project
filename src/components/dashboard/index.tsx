import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import NavbarHead from "../navbar";
function Admin() {
  return (
    <>
      <NavbarHead />
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Admin;
