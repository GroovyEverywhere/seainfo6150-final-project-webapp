import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./chinese1.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Chinese1 = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>{props.article[0].title}</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src={props.article[0].image._url} />
        <div className={Styles.text}>
            <p>Category: {props.article[0].Category}</p>
            <p>Cook Time: {props.article[0].cookTime}</p>
            <p>Author: {props.article[0].author}</p>
            <div dangerouslySetInnerHTML={{ __html: props.article[0].text }} />
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Chinese1;