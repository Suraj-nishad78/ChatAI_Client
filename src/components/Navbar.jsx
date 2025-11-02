import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [hideList, setHideList] = useState(false);
  const { login, setLogin, userId, setUserId } = useContext(AppContext);

  const showList = () => {
    setHideList(!hideList);
  };

  const showForm = () => {
    setLogin(true);
  };

  const logout = () =>{
    setUserId("");
    localStorage.clear();
  }

  return (
    <div className="navbar" style={login ? { opacity: 0.5 } : {}}>
      <Link to="/">
        <div className={`navbar-title ${hideList ? "hide" : ""}`}>
          <img
            src="https://images.seeklogo.com/logo-png/62/1/leonardo-ai-logo-png_seeklogo-621169.png"
            loading="lazy"
          />
          <p>ChatAI</p>
        </div>
      </Link>
      <div className={`navbar-list ${hideList ? "" : "hide"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/image">Uploads</Link>
          </li>
          <li>
            <Link to="/upgrade">Upgrade</Link>
          </li>
          {userId?
          <div className="profile-img">
            {/* <Link onClick={logout}>Logout</Link> */}
            <img src={assets.profile_icon} onClick={logout} alt="profile" />
          </div>
          :
           <li className="login">
            <Link onClick={showForm}>Login</Link>
          </li>}
        </ul>
        <div className="nav-close" onClick={showList} id="nav-close">
          <i className="ri-close-large-fill"></i>
        </div>
      </div>
      <div
        className={`nav-toggle ${hideList ? "hide" : ""}`}
        onClick={showList}
        id="nav-toggle"
      >
        <i className="ri-apps-2-fill"></i>
      </div>
    </div>
  );
};

export default Navbar;
