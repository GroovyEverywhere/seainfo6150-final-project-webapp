import React, { useState } from "react";
import { Switch, Route, Link} from "react-router-dom";
import Styles from "./categories.module.css"
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"

const Categories = (props) => {
    const [isTextShowing1, setIsTextShowing1] = useState(false);
    const [isTextShowing2, setIsTextShowing2] = useState(false);
    const [isTextShowing3, setIsTextShowing3] = useState(false);
    const [isTextShowing4, setIsTextShowing4] = useState(false);
    const [isTextShowing5, setIsTextShowing5] = useState(false);
    const [isTextShowing6, setIsTextShowing6] = useState(false);
    const [isTextShowing7, setIsTextShowing7] = useState(false);

    function onClick1() {
      setIsTextShowing1(!isTextShowing1);
    }
    function onClick2() {
      setIsTextShowing2(!isTextShowing2);
    }
    function onClick3() {
      setIsTextShowing3(!isTextShowing3);
    }
    function onClick4() {
      setIsTextShowing4(!isTextShowing4);
    }   
    function onClick5() {
      setIsTextShowing5(!isTextShowing5);
    }
    function onClick6() {
      setIsTextShowing6(!isTextShowing6);
    }
    function onClick7() {
      setIsTextShowing7(!isTextShowing7);
    }



  return  (
    <div>
        <Header/>
        <section className={Styles.head}>
          <h1 className={Styles.title}>World Cursins</h1>
          <h1 className={Styles.explaination}>When "show more" is clicked, the first one is the number of recipes in that category and the second one is the introduction of the cursin.</h1>
        </section>
        <section className = {Styles.Cuisine}>
            <div className = {Styles.type1}>
            <Link to ="/chinese"><p>Chinese</p></Link>
                {isTextShowing1 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>3</li> 
                      <li>Integrity of color and taste </li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick1}> {isTextShowing1 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type2}>
            <Link to ="/japanese"><p>Japanese</p></Link>
                {isTextShowing2 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>Traditional and flavorful</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick2}> {isTextShowing2 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type3}>
            <Link to ="/mexican"><p>Mexican</p></Link>
                {isTextShowing3 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>2</li> 
                      <li>Mixture of freshness</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick3}> {isTextShowing3 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type4}>
            <Link to ="/italian"><p>Italian</p></Link>
                {isTextShowing4 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>3</li> 
                      <li>Historic and thick</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick4}> {isTextShowing4 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type5}>
            <Link to ="/american"><p >American</p></Link>
                {isTextShowing5 && (
                    <div className={Styles.text5}>
                    <ul>
                      <li >4</li>  
                      <li >Combination of fusions</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick5}> {isTextShowing5 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type6}>
            <Link to ="/dessert"><p>Dessert</p></Link>
                {isTextShowing6 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>2</li> 
                      <li>Delightful sweetness</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick6}> {isTextShowing6 ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type7}>
            <Link to ="/drinks"><p>Drinks</p></Link>
                {isTextShowing7 && (
                    <div className={Styles.text}>
                    <ul>
                      <li>2</li> 
                      <li>Refreshing and comfort</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick7}> {isTextShowing7 ? "Show less" : "Show more"} </button>
            </div>
        </section>
        <Footer/>
    </div>
  );
}

export default Categories;