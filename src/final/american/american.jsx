import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./american.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const American = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>American Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/american1"><li className={Styles.names}>{props.article[9].title}</li></Link>
        <Link to ="/american2"><li className={Styles.names}>{props.article[10].title}</li></Link>
        <Link to ="/american3"><li className={Styles.names}>{props.article[11].title}</li></Link>
        <Link to ="/american4"><li className={Styles.names}>{props.article[12].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default American;