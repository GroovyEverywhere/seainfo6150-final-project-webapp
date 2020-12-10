import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./footer.module.css";
import Aomg from "../header/2.PNG"

const Footer = () => {


  return  (
    <div>
    <section className = {Styles.FootBar}>
     <img className = {Styles.logo} src = {Aomg}/>
     <div className={Styles.sentence}>We can get over this. Stay home and enjoy ur food!</div>
     <div className={Styles.note}>@INFO6150 Final Project by Lei Tan</div>
    </section>
    </div>
  );
}

export default Footer;
