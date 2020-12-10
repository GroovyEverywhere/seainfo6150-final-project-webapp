import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./header.module.css";
import Aomg from "./2.PNG";

const Header = () => {


  return  (
    <div>
    <section className = {Styles.HeadBar}>
    <Link to = "/" className={Styles.logoLink}>
      <img  className = {Styles.logo} src = {Aomg}/>
      </Link>
      <Link to = "/categories" className = {Styles.bar}>Categories</Link> 
      <Link to = "/allrecipes" className = {Styles.bar}>All Recipes</Link> 
      <Link to = "/tips" className = {Styles.bar}>Cooking Tips</Link> 
      <Link to = "/about" className = {Styles.bar}>About Us</Link>
    </section>
    </div>
  );
}

export default Header;









