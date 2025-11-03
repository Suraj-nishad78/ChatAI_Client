import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";

const Navbar = () => {
  const [hideList, setHideList] = useState(false);
  const { login, setLogin, userId, setUserId } = useContext(AppContext);
  const [hideProfile, setHideProfile] = useState(false);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = () => {
    fileInputRef.current.click(); // open file picker
  };

  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "react_uploads_preset"); // your preset name
      data.append("cloud_name", "dguxvwjkj");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dguxvwjkj/image/upload",
        data
      );
      setImageUrl(res.data.secure_url);
    } catch (e) {
      console.log("Error occured: ", e);
    }
  };

  const showList = () => {
    setHideList(!hideList);
  };

  const showForm = () => {
    setLogin(true);
  };

  const logout = () => {
    setUserId("");
    setHideProfile(false);
    localStorage.clear();
  };

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
            <Link to="/upgrade">Upgrade</Link>
          </li>
          {userId ? (
            <div className="profile">
              {/* <Link onClick={logout}>Logout</Link> */}
              <div className="profile-section">
                <img
                  src={imageUrl?imageUrl:assets.profile_icon}
                  onClick={() => setHideProfile(!hideProfile)}
                  alt="profile"
                />
              </div>
              {hideProfile && (
                <div className="profile-details">
                  <div id="profile-image-update">
                    <img
                      src={imageUrl?imageUrl:"https://st4.depositphotos.com/11634452/21365/v/450/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg"}
                      loading="lazy"
                      alt="image"
                    />
                    {/* <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                      loading="lazy"
                      alt="image"
                    /> */}
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <span onClick={handleClick}>+</span>
                  </div>
                  <div id="profile-content">
                    <h1>John Doe</h1>
                    <p>iamsuraj0737@gmail.com</p>
                    <button onClick={logout}>Logout</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <li className="login">
              <Link onClick={showForm}>Login</Link>
            </li>
          )}
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
