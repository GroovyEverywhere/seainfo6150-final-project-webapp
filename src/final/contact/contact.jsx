import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Styles from "./contact.module.css";
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"
import ReactDOM from 'react-dom';


class Contact  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Thanks for submitting " + this.state.username + "!");
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
render(){
  return  (
    <div className={Styles.contact}>
        <Header/>
        <section className={Styles.head}>
          <h1 className={Styles.title}>Contact Us</h1>
        </section>
        <section className={Styles.form}>
            <form onSubmit={this.mySubmitHandler}>
            <h1>Subscrib AOMG to stick with the most trending recipes</h1>
            <p><b>Name</b> <span className={Styles.req}>*</span></p>
            <input type="text" name="username" maxLength = "10" placeholder ="First Name" onChange={this.myChangeHandler}/>
             
            <input className={Styles.nametext2} type="text2" name="username" maxLength = "10" placeholder ="Last Name"/>
            
            <p><b>Gender </b><span className={Styles.req}>*</span></p>
            <select>
                <option value="12">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <p><b>Age</b></p>
            <input type="text" name="age" maxLength="3"/>
            <p><b>Tel</b></p>
            <input type="text" name="code" maxLength = "4" placeholder ="place code"/>
            -
            <input type="text" name="telephone" maxLength = "10"/>
            <p><b>Address</b></p>
            <input type="text" name="address1" placeholder="address1"/>
            <input className={Styles.addtext2} type="text" name="address2" placeholder="address2"/>
            <p><b>Email Address </b><span className={Styles.req}>*</span></p>
            <input type="text" name="email" />
            <p><b>Interesting Cuisines</b></p>
            <select>
                <option value="1">Please Select</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="Italian">Italian</option>
                <option value="American">American</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
            </select>
            <p><b>How do rate your proficiency of cook?</b></p>
            <div className={Styles.checkbox}>
                <label><input type="checkbox" name="beginner" id="beginner" value="beginner"/> Beginner</label>
                <label><input type="checkbox" name="intermediate" id="intermediate" value="intermediate"/> Intermediate</label>
                <label><input type="checkbox" name="professional" id="professional" value="professional"/> Professional</label>
                <label><input type="checkbox" name="Master" id="Master" value="Master"/> Master</label>
                <label><input type="checkbox" name="better" id="better" value="better"/> Well, just a little better than Gorden Ramsay</label>
            </div>
            <p><b>Your Comment</b></p>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Tell us more about you or rate our service"></textarea><br></br>
            <button>Submit</button>
            </form>
        </section>
        <Footer/>
    </div>
  );
}
}

export default Contact;