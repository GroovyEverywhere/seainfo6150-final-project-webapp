import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./final/homepage/homepage.jsx";
import { isEmpty } from "lodash";
import "./App.css"
import Categories from "./final/categories/categories.jsx"

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("");
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
     
      <Switch>
        <Route exact path="/homepage"><Homepage/></Route>
        <Route exact path="/categories"><Categories/></Route>
      </Switch>
    </div>
  );
}


export default App;

