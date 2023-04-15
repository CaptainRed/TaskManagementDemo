import React from 'react';

// styling
import '../App1.css';

import { FaUserAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFillUnlockFill } from "react-icons/bs";
const SignUp = () => {

  return (
    <div className="form-comp cfb">
      <h1>Create your account</h1>
      <form className="sign-up-form cfb">
        <label>
          <div className ="search">
            <div className = 'search__bar'>
              <FaUserAlt className = "fa"/>
                <input className="input" placeholder="Your Name"/>
              </div>
            </div>
        </label>
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
        <label>
          <div className="search">
            <div className='search__bar'>
             <BsFillUnlockFill className = "fa"/>
              <input className="input" placeholder="Confirm Password"/>
            </div>
          </div>
        </label>
        <br/>
        <button className="button1">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
