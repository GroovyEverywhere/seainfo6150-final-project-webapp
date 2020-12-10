import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./chinese.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Chinese = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Chinese Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/2089712/pexels-photo-2089712.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/chinese1"><li className={Styles.names}>{props.article[0].title}</li></Link>
        <Link to ="/chinese2"><li className={Styles.names}>{props.article[1].title}</li></Link>
        <Link to ="/chinese3"><li className={Styles.names}>{props.article[2].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Chinese;