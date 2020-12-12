import React, { useState } from "react";
import { Switch, Route, Link} from "react-router-dom";
import Styles from "./errorpage.module.css"
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"


const Errorpage = (props) => {


return  (
    <div>
        <Header/>
        <section className={Styles.head}>
          <h1 className={Styles.title}>Nope! The page you are looking for is currently unavailable...</h1>
        </section>
        <div className={Styles.img}>
        <img  src="https://cdn.dribbble.com/users/1876421/screenshots/4354027/dribbble_008.png?compress=1&resize=800x600"></img>
        </div>
        <Footer/>
    </div>
  );
}

export default Errorpage;