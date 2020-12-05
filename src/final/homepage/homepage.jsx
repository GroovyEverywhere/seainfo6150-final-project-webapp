import React from "react";
import { Switch, Route } from "react-router-dom";
import Styles from "./homepage.module.css"
import Header from "../header/header.jsx"


const Homepage = () => {

  return (
    <div className={Styles.homeContent}>
        <Header/> 
      
        <div className={Styles.intro}>
            <div className={Styles.introText}>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>The Only Recipe Website</span>
                </h1>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>You Will Ever</span>
                </h1>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>Need</span>
                </h1>
            </div>
        </div>
        <div>
            
        </div>
       
    </div>
    
  );
}

export default Homepage;
