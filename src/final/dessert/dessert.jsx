import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./dessert.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Dessert = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Dessert Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/dessert1"><li className={Styles.names}>{props.article[13].title}</li></Link>
        <Link to ="/dessert2"><li className={Styles.names}>{props.article[14].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Dessert;