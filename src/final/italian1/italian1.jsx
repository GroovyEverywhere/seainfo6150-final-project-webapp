import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./italian1.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Italian1 = (props) => {


  return  (
    <div>
    <Header/>
    <section className = {Styles.head}>
        <h1 className={Styles.title}>{props.article[6].title}</h1>
    </section>
    <section className={Styles.content}>
        <img className={Styles.img} src={props.article[6].image._url} />
        <div className={Styles.text}>
            <p>Category: {props.article[6].Category}</p>
            <p>Cook Time: {props.article[6].cookTime}</p>
            <p>Author: {props.article[6].author}</p>
            <div dangerouslySetInnerHTML={{ __html: props.article[6].text }} />
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Italian1;