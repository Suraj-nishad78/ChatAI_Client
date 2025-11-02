import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, setSignup] = useState(false);

  const { login, setLogin } = useContext(AppContext);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const closeForm = () => {
    setLogin(false);
  };
  const signupForm = () => {
    setSignup(!signup);
  };

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };


  return (
    <div className="form-container">
      <div className="form-title">
        <h1>{signup ? "Signup" : "Login"}</h1>
        <p>
          {signup
            ? "Welcome back! Please sign up to continue."
            : "Welcome back! Please sign in to continue."}
        </p>
      </div>
      {signup && (
        <div className="form-input">
          <img id="profile" src={assets.profile_icon} />
          <input type="text" placeholder="Name" onChange={handleName} />
        </div>
      )}
      <div className="form-input">
        <img src={assets.email_icon} />
        <input type="email" placeholder="Email" onChange={handleEmail} />
      </div>
      <div className="form-input">
        <img src={assets.lock_icon} />
        <input type="password" placeholder="Password" onChange={handlePass} />
      </div>
      <div className="form-footer">
        <p>Forget password?</p>
        {!signup && <button type="submit">Login</button>}
        {signup && <button  type="submit">Signup</button>}
      </div>
      <div className="form-switch-btn">
        <p>
          {signup ? "Already" : "Don't"} have an account?
          <span onClick={signupForm}>{signup?"Login":"Sign up"}</span>
        </p>
      </div>
      <div className="google" onClick={handleLogin}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="google"/>
        <p>Continue with Google</p>
      </div>
      <div className="close-form" onClick={closeForm}>
        <img src={assets.cross_icon} />
      </div>
    </div>
  );
};

export default Form;
