
import { Switch, Route, Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import Homepage from "./final/homepage/homepage.jsx";
import { isEmpty } from "lodash";
// import "./App.css"
import Categories from "./final/categories/categories.jsx"

function App() {


  return  (
    <div className="App">
     
      <Switch>
        <Route exact path="/homepage"><Homepage/></Route>
        <Route exact path="/categories"><Categories/></Route>
      </Switch>
    </div>
  );
}


export default App;