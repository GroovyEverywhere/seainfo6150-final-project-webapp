import React from "react"
import { Switch, Route } from "react-router-dom";
import Homepage from "./final/homepage/homepage.jsx";
import Categories from "./final/categories/categories.jsx"

function App() {
  return  (
    <div className="App">
     <Switch>
        <Route exact path="/homepage"><Homepage/></Route>
    
      </Switch>
    </div>
  );

}
export default App;



