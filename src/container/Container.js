import React, {useState} from 'react';

// styling
import '../App1.css';


// components
import SignIn from '../sign-in/SignIn';
import SignUp from '../sign-up/SignUp';

import { TiGroup } from "react-icons/ti";

// import iconImage from '../Image/icon2.png';

const Container = () => {
  const [welcome, setWelcome] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"]
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className="Container cfb">
      <div className={setBannerClass()}>
        {welcome ?
          <TiGroup className = "icon"/>



            : <TiGroup className = "icon"/>}


        {welcome ?
          <h2>Already have an account?</h2>



            : <h2>Do not have an account? </h2>}





        <button className="button1" onClick={()=> setWelcome(!welcome)}>
          {welcome ?
            "Sign In"
              : "Create Account"}
        </button>
      </div>

      <div className={setFormClass()}>
          {welcome ?
            <SignUp />
              : <SignIn/>
          }

      </div>
    </div>
  );
}



export default Container;
