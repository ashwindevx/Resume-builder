import React from "react";

import Dashboard from "./Dashboard/Dashboard.js";
import Resume from "./Resume/Resume.js";

const Layout = () => {
  return (
    <div className="flex justify-between">
      <Dashboard />
      <Resume />
    </div>
  );
};

export default Layout;
