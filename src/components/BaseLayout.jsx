import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const BaseLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
