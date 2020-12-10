import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./mexican2.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Mexican2 = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>{props.article[5].title}</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src={props.article[5].image._url} />
        <div className={Styles.text}>
            <p>Category: {props.article[5].Category}</p>
            <p>Cook Time: {props.article[5].cookTime}</p>
            <p>Author: {props.article[5].author}</p>
            <div dangerouslySetInnerHTML={{ __html: props.article[5].text }} />
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Mexican2;