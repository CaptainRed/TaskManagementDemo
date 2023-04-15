import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// styling
import '../App1.css';
//import SearchIcon from '@material-ui/icons/Search';
import { FiMail } from "react-icons/fi";
import { BsFillUnlockFill } from "react-icons/bs";


const SignIn = () => {
  return (
    <div className="form-comp cfb">
      <h1>Sign in to your account</h1>
      <form className="sign-up-form cfb">
        <label>
            <div className ="search">
              <div className = 'search__bar'>
                <FiMail className = "fa"/>
                  <input className="input" placeholder="Email"/>

              </div>
            </div>
        </label>
        <label>
          <div className ="search">
              <div className = 'search__bar'>
               <BsFillUnlockFill className = "fa"/>
                <input className="input" placeholder="Password"/>
              </div>
            </div>
        </label>
        <br/>
        <Link to={"../"}>
        <button className="button1">
          Sign In
        </button>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
