import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./Japanese.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Japanese = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Japanese Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/japanese1"><li className={Styles.names}>{props.article[3].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Japanese;