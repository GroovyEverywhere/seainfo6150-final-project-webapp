import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./italian.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Italian = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>Italian Dishes</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src="https://images.pexels.com/photos/1058714/pexels-photo-1058714.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <ul>
        <Link to ="/italian1"><li className={Styles.names}>{props.article[6].title}</li></Link>
        <Link to ="/italian2"><li className={Styles.names}>{props.article[7].title}</li></Link>
        <Link to ="/italian3"><li className={Styles.names}>{props.article[8].title}</li></Link>
        </ul>
    </section>
    <Footer/>
    </div>
  );
}

export default Italian;