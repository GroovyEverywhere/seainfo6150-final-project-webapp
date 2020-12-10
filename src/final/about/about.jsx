import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./about.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"


const About = () => {


  return  (
    <div className={Styles.about}>
        <Header/>
        <section className={Styles.head}>
          <h1 className={Styles.title}>About Us</h1>
        </section>
        <section className={Styles.content}>
            <div className={Styles.img} >

            </div>
            <div className={Styles.intro}>
                <p className={Styles.text}>To all the friends that love to get hands on food:</p>
                <p className={Styles.text}>We believe in that "One cannot think well, love well, sleep well, if one has not dined well". AOMG is a perfect place for you to look for recipes on trends or simply to learn about how a dish is specifically made.</p>
                <p className={Styles.text}>AOMG provides recipes from all over the world and our staff is always trying to keep every single recipe refreshing and up tp date.</p>
                <p className={Styles.text}>So if you are pretty satisfied with what we are doing right now, please smash the contact us button so that we can know you as well and provide you the best recipes you will ever need!</p>
            </div>
        </section>
        <hr/>
        <Link to ="/contact"><button className={Styles.but}>Contact Us</button></Link>
        <Footer/>
    </div>
  );
}

export default About;
