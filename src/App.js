import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./final/homepage/homepage.jsx";
import { isEmpty } from "lodash";
import "./App.css"
import Categories from "./final/categories/categories.jsx"
import Allrecipes from "./final/AllRecipes/allrecipes.jsx"
import Tips from "./final/tips/tips.jsx"
import About from "./final/about/about.jsx"
import Chinese from "./final/chinese/chinese.jsx"
import Japanese from "./final/Japanese/Japanese.jsx"
import Mexican from "./final/mexican/mexican.jsx"
import Italian from "./final/italian/italian.jsx"
import American from "./final/american/american.jsx"
import Dessert from "./final/dessert/dessert.jsx"
import Drinks from "./final/drinks/drinks.jsx"
import Chinese1 from "./final/chinese1/chinese1.jsx"
import Chinese2 from "./final/chinese2/chinese2.jsx"
import Chinese3 from "./final/chinese3/chinese3.jsx"
import Japanese1 from "./final/japanese1/japanese1.jsx"
import Mexican1 from "./final/mexican1/mexican1.jsx"
import Mexican2 from "./final/mexican2/mexican2.jsx"
import Italian1 from "./final/italian1/italian1.jsx"
import Italian2 from "./final/italian2/italian2.jsx"
import Italian3 from "./final/italian3/italian3.jsx"
import American1 from "./final/american1/american1.jsx"
import American2 from "./final/american2/american2.jsx"
import American3 from "./final/american3/american3.jsx"
import American4 from "./final/american4/american4.jsx"
import Dessert1 from "./final/dessert1/dessert1.jsx"
import Dessert2 from "./final/dessert2/dessert2.jsx"
import Drinks1 from "./final/drinks1/drinks1.jsx"
import Drinks2 from "./final/drinks2/drinks2.jsx"
import Contact from "./final/contact/contact.jsx"

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://run.mocky.io/v3/50a7e263-9d9c-45f3-b8aa-a017199af554");
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
        <Route exact path="/"><Homepage/></Route>
        <Route exact path="/categories"><Categories/></Route>
        <Route exact path="/allrecipes"><Allrecipes article={fetchedData}/></Route>
        <Route exact path="/tips"><Tips/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/contact"><Contact/></Route>

        <Route exact path="/chinese"><Chinese article={fetchedData}/></Route>
        <Route exact path="/japanese"><Japanese article={fetchedData}/></Route>
        <Route exact path="/mexican"><Mexican article={fetchedData}/></Route>
        <Route exact path="/italian"><Italian article={fetchedData}/></Route>
        <Route exact path="/american"><American article={fetchedData}/></Route>
        <Route exact path="/dessert"><Dessert article={fetchedData}/></Route>
        <Route exact path="/drinks"><Drinks article={fetchedData}/></Route>

        <Route exact path="/chinese1"><Chinese1 article={fetchedData}/></Route>
        <Route exact path="/chinese2"><Chinese2 article={fetchedData}/></Route>
        <Route exact path="/chinese3"><Chinese3 article={fetchedData}/></Route>

        <Route exact path="/japanese1"><Japanese1 article={fetchedData}/></Route>

        <Route exact path="/mexican1"><Mexican1 article={fetchedData}/></Route>
        <Route exact path="/mexican2"><Mexican2 article={fetchedData}/></Route>

        <Route exact path="/italian1"><Italian1 article={fetchedData}/></Route>
        <Route exact path="/italian2"><Italian2 article={fetchedData}/></Route>
        <Route exact path="/italian3"><Italian3 article={fetchedData}/></Route>

        <Route exact path="/american1"><American1 article={fetchedData}/></Route>
        <Route exact path="/american2"><American2 article={fetchedData}/></Route>
        <Route exact path="/american3"><American3 article={fetchedData}/></Route>
        <Route exact path="/american4"><American4 article={fetchedData}/></Route>

        <Route exact path="/dessert1"><Dessert1 article={fetchedData}/></Route>
        <Route exact path="/dessert2"><Dessert2 article={fetchedData}/></Route>

        <Route exact path="/drinks1"><Drinks1 article={fetchedData}/></Route>
        <Route exact path="/drinks2"><Drinks2 article={fetchedData}/></Route>
      </Switch>
    </div>
  );
}


export default App;
