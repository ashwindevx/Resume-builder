import React from "react";

import Layout from "./components/Layout/Layout.js";
import Store from "./Store.js";

function App() {
  return (
    <Store>
      <Layout />
    </Store>
  );
}

export default App;
