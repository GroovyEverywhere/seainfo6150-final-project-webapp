import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./italian2.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Italian2 = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>{props.article[7].title}</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src={props.article[7].image._url} />
        <div className={Styles.text}>
            <p>Category: {props.article[7].Category}</p>
            <p>Cook Time: {props.article[7].cookTime}</p>
            <p>Author: {props.article[7].author}</p>
            <div dangerouslySetInnerHTML={{ __html: props.article[7].text }} />
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Italian2;