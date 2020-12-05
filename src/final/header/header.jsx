import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./header.module.css";
import Aomg from "./2.PNG";

const Header = () => {


  return  (
    <div>
    <section className = {Styles.HeadBar}>
      <img className = {Styles.logo} src = {Aomg}/>
      <Link to = "/categories" className = {Styles.bar}>Categories</Link> 
      <div className = {Styles.bar}>All Recipes</div> 
      <div className = {Styles.bar}>Cooking Tips</div> 
      <div className = {Styles.bar}>About Us</div>
    </section>
    </div>
  );
}

export default Header;









