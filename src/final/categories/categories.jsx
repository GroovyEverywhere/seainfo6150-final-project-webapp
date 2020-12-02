import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Styles from "./categories.module.css"
import Header from "../header/header.jsx"

const Categories = () => {
    const [isTextShowing, setIsTextShowing] = useState(false);

    function onClick() {
        setIsTextShowing(!isTextShowing);
    }


  return  (
    <div>
        <Header/>
        <section className = {Styles.Cuisine}>
            <div className = {Styles.type1}>
                <p>box1</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type2}>
                <p>box2</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type3}>
                <p>box3</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type4}>
                <p>box4</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type5}>
                <p>box5</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type6}>
                <p>box6</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
            <div className = {Styles.type7}>
                <p>box7</p>
                {isTextShowing && (
                    <div className={Styles.text}>
                    <ul>
                      <li>1</li> 
                      <li>2</li> 
                      <li>And more</li>  
                    </ul>
                    </div>
                )}
                <button onClick={onClick}> {isTextShowing ? "Show less" : "Show more"} </button>
            </div>
        </section>
    </div>
  );
}

export default Categories;