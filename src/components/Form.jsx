import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import { toast } from "react-toastify";
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  const { login, setLogin, userId, setUserId } = useContext(AppContext);

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

  const handleLoginByGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}auth/google`;
  };

  const validation = (useremail, userpass) => {
    if (!useremail.trim() || !userpass.trim()) {
      toast.error("Please fill the all details ⚠️");
      return;
    } else if (!useremail.includes(".") || !useremail.includes("@")) {
      toast.error("You have entered a invalid email ⚠️");
      return;
    } else if (userpass.length < 6) {
      toast.error("Password must be six digits & character ⚠️");
      return;
    } else {
      return true;
    }
  };

  const handleLogin = async () => {
    if (validation(email, password)) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}users/signin`,
          {
            email,
            password,
          }
        );
        if(res.data.userId){
          toast.success("Login Successfully! 😊");
          setUserId(res.data.userId);
          setEmail("");
          setPassword("");
          setLogin(false)
          navigate("/upgrade")
          return;
        }else{
          toast.error(`${res.data.msg} ⚠️`);
          return;  
        }
      } catch (e) {
        toast.error("Something went wrong. Please try again! ⚠️");
        console.log("Error occured while logging: ", e);
      }
    }
  };

  const handleSignup = async(e) =>{
    e.preventDefault();
    if(name.length<2){
      toast.error("Name must be greater tha two character.");
      return;
    }
    if (validation(email, password)) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}users/signup`,
          {
            name,
            email:email.toLowerCase(),
            password,
          }
        );
        if(res.status == 200){
          toast.error(res.data.msg);
          return;
        }else if(res.status == 201){
          toast.success("Signup Successfully! 😊");
          setUserId(res.data.userId);
          setEmail("");
          setPassword("");
          setName("");
          setLogin(false)
          navigate("/upgrade")
        }
      } catch (e) {
        toast.error("Something went wrong. Please try again! ⚠️");
        console.log("Error occured while signup: ", e);
      }
    }
  }

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
        {!signup && (
          <button onClick={handleLogin} type="submit">
            Login
          </button>
        )}
        {signup && <button onClick={handleSignup} type="submit">Signup</button>}
      </div>
      <div className="form-switch-btn">
        <p>
          {signup ? "Already" : "Don't"} have an account?
          <span onClick={signupForm}>{signup ? "Login" : "Sign up"}</span>
        </p>
      </div>
      <div className="google" onClick={handleLoginByGoogle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
          alt="google"
        />
        <p>Continue with Google</p>
      </div>
      <div className="close-form" onClick={closeForm}>
        <img src={assets.cross_icon} />
      </div>
    </div>
  );
};

export default Form;
