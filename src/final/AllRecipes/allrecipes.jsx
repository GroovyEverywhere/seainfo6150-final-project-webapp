import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./allrecipes.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"
import PropTypes from "prop-types";

const Allrecipes = (props) => {
  

  return  (
    <div>
    <Header/>
    <section className={Styles.head}>
          <h1 className={Styles.title}>Recipes</h1>
    </section>
    <section className={Styles.list}>
          <Link to ="/chinese1"><p className={Styles.names}>{props.article[0].title}</p></Link>
          <Link to ="/chinese2"><p className={Styles.names}>{props.article[1].title}</p></Link>
          <Link to ="/chinese3"><p className={Styles.names}>{props.article[2].title}</p></Link>
          <hr/>
          <Link to ="/japanese1"><p className={Styles.names}>{props.article[3].title}</p></Link>
          <hr/>
          <Link to ="/mexican1"><p className={Styles.names}>{props.article[4].title}</p></Link>
          <Link to ="/mexican2"><p className={Styles.names}>{props.article[5].title}</p></Link>
          <hr/>
          <Link to ="/italian1"><p className={Styles.names}>{props.article[6].title}</p></Link>
          <Link to ="/italian2"><p className={Styles.names}>{props.article[7].title}</p></Link>
          <Link to ="/italian3"><p className={Styles.names}>{props.article[8].title}</p></Link>
          <hr/>
          <Link to ="/american1"><p className={Styles.names}>{props.article[9].title}</p></Link>
          <Link to ="/american2"><p className={Styles.names}>{props.article[10].title}</p></Link>
          <Link to ="/american3"><p className={Styles.names}>{props.article[11].title}</p></Link>
          <Link to ="/american4"><p className={Styles.names}>{props.article[12].title}</p></Link>
          <hr/>
          <Link to ="/dessert1"><p className={Styles.names}>{props.article[13].title}</p></Link>
          <Link to ="/dessert2"><p className={Styles.names}>{props.article[14].title}</p></Link>
          <hr/>
          <Link to ="/drinks1"><p className={Styles.names}>{props.article[15].title}</p></Link>
          <Link to ="/drinks2"><p className={Styles.names}>{props.article[16].title}</p></Link>

    </section>

    <Footer/>
    </div>
  );
}

export default Allrecipes;
