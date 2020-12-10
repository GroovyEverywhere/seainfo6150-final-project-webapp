import React from "react";
import { Switch, Route } from "react-router-dom";
import Styles from "./homepage.module.css"
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"


const Homepage = () => {

  return (
    <div>
    <Header/> 
    <section className={Styles.homeIntro}>
        <div className={Styles.intro}>
            <div className={Styles.introText}>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>The Only Recipe Website</span>
                </h1>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>You Will Ever</span>
                </h1>
                <h1 className={Styles.hide}>
                    <span class={Styles.text}>Need</span>
                </h1>
            </div>
        </div>
    </section>

    <section className={Styles.homeContent}>
        <div className = {Styles.middle}>
            <div className={Styles.midText}>
                <h1 className={Styles.lyrics}>There's *** on his sweater already, mom's spaghetti!😏</h1>
                <hr/>
                
                
                <img className={Styles.pic1} src = "https://cdn.livekindly.co/wp-content/uploads/2018/04/Eminem-Moms-Spag.png"/>
                
                <h3 className={Styles.words}>You can find varios cursins with any fusion styles right here. Chinese🥡? Japanese🍣? Mexican🌮? We got it all and of course homemade mom's spaghetti.🍝</h3>
                <hr/>
                
                <div className={Styles.container}>
                    <div className={Styles.item1}>
                        <h1></h1>
                    </div>
                    <div className={Styles.item2}>
                        <h1></h1>
                    </div>
                    <div className={Styles.item3}> 
                        <h1></h1>
                    </div>
                    <div className={Styles.item4}>
                        <h1></h1>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>

    <section className={Styles.update}>
        <div className={Styles.botText}>
            <h1 className={Styles.botTitle}>Up to Date</h1>
            <hr/>
            <h1 className={Styles.botWords}>It cannot be better to start/finish a day with a delightful treat. Stick to AOMG for refreshing recipes.</h1>
        </div>
    </section>
    <Footer/>
    </div>
    
  );
}

export default Homepage;
