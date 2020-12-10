import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./tips.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Tips = () => {


  return  (
    <div>
    <Header/>
    <section className={Styles.head}>
        <h1 className={Styles.title}>Tips For Cooking</h1>     
    </section>
    <section className={Styles.body}>
        <div className={Styles.tip1}>
            <h1 className={Styles.tipTitle1}>1. Save Bacon Fat</h1>
            <img className={Styles.tipImage1} src="https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
            <p className={Styles.tipWords1}>There is no limit to how many things you can do with your leftover bacon grease. Fry your eggs in it. Fry your potatoes in it. Make a damn bacon candle! The possibilities are endless.</p>
        </div>
        <hr/>
        <div className={Styles.tip2}>
          <h1 className={Styles.tipTitle2}>2. Put a Damp Paper Towel Under Your Cutting Board</h1>
          <img className={Styles.tipImage2} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/preparing-julienned-vegetables-for-korean-pancakes-royalty-free-image-980099930-1544806063.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
          <p className={Styles.tipWords2}>This prevents it from swiveling around while you're trying to do something with a very sharp knife.</p>
        </div>
        <hr/>
        <div className={Styles.tip3}>
          <h1 className={Styles.tipTitle3}>3. Add a Little Salt to Everything. Yes, Everything.</h1>
          <img className={Styles.tipImage3} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-adding-salt-to-cooking-pot-on-stove-royalty-free-image-476992878-1544808929.jpg?crop=1xw:1xh;center,top&resize=980:*"/>
          <p className={Styles.tipWords3}>One editor explains you should even salt dessert: "It helps to bring out, accentuate, and deepen all sorts of flavors and will help your sweet treats taste more complex."</p>
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Tips;
