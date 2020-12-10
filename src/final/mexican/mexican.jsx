import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./mexican.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Mexican = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Mexican Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/mexican1"><li className={Styles.names}>{props.article[4].title}</li></Link>
        <Link to ="/mexican2"><li className={Styles.names}>{props.article[5].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Mexican;