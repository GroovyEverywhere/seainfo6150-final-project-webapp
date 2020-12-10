import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./drinks.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Drinks = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Drinks Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/drinks1"><li className={Styles.names}>{props.article[15].title}</li></Link>
        <Link to ="/drinks2"><li className={Styles.names}>{props.article[16].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Drinks;