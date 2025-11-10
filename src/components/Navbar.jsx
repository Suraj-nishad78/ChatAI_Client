import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

const Navbar = () => {
  const [hideList, setHideList] = useState(false);
  const [hideProfile, setHideProfile] = useState(false);
  const fileInputRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const {
    login,
    setLogin,
    userId,
    setUserId,
    userData,
    setUserData,
    theme,
    setTheme,
  } = useContext(AppContext);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleClick = () => {
    fileInputRef.current.click(); // open file picker
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", import.meta.env.VITE_API_UPLOAD_PRESET); // your preset name
      data.append("cloud_name", import.meta.env.VITE_API_CLOUD_NAME);
      setLoader(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_API_CLOUD_NAME
        }/image/upload`,
        data
      );
      const resPatch = await axios.patch(
        `${import.meta.env.VITE_API_URL}users/updateProfileImage`,
        {
          userId,
          imageURL: res.data.secure_url,
        }
      );
      const { name, email, imageURL } = resPatch.data.user;
      setUserData({ name, email, imageURL });
      setLoader(false);
      toast.success("Profile Pic Uploaded Successfully 😊");
    } catch (e) {
      setLoader(false);
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
    setUserData(false);
  };

  const getUser = async (id) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}users/userDetails`,
        {
          userId: id,
        }
      );
      const { name, email, imageURL } = res.data.user;
      setUserData({ name, email, imageURL });
    } catch (e) {
      console.log("Error occured while fetching user details: ", e);
    }
  };

  const deleteAccount = async () => {
    try {
      const result = confirm("Are you sure you want delete your account?");
      if (!result) {
        return;
      }
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}users/delete`,
        {
          data: { userId },
        }
      );
      if (res.status === 200) {
        toast.success("Account Deleted Successfully 😊");
      } else {
        toast.error("Something went wrong. Please try again!");
      }
      setUserId("");
      setHideProfile(false);
      localStorage.clear();
      setUserData(false);
    } catch (e) {
      console.log("Error while deleting account: ", e);
    }
  };

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <div
      className="navbar"
      style={login ? { opacity: 0.5 } : {}}
    >
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
                  src={
                    userData.imageURL ? userData.imageURL : assets.profile_icon
                  }
                  onClick={() => setHideProfile(!hideProfile)}
                  alt="profile"
                />
              </div>
              {hideProfile && (
                <div className="profile-details">
                  <div id="profile-image-update">
                    <img
                      src={
                        userData.imageURL
                          ? userData.imageURL
                          : "https://st4.depositphotos.com/11634452/21365/v/450/depositphotos_213659488-stock-illustration-picture-profile-icon-human-people.jpg"
                      }
                      loading="lazy"
                      alt="image"
                    />
                    {loader && (
                      <div className="image-loader">
                        <TailSpin
                          visible={true}
                          height="40"
                          width="40"
                          color="#000000"
                          ariaLabel="tail-spin-loading"
                          radius="2"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </div>
                    )}
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
                    <h1>{userData.name ? userData.name : "user"}</h1>
                    <p>{userData.email ? userData.email : "user@gmail.com"}</p>
                    <div className="profile-btns">
                      <button onClick={logout}>Logout</button>
                      <button onClick={deleteAccount}>Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <li className="login">
              <Link onClick={showForm}>Login</Link>
            </li>
          )}
          <div className="theme-nav">
            <img
              className="theme"
              onClick={handleTheme}
              src={
                theme
                  ? "https://png.pngtree.com/png-vector/20210823/ourmid/pngtree-dark-mode-icon-light-png-clipart-png-image_3811921.jpg"
                  : "https://static.thenounproject.com/png/1664849-200.png"
              }
              alt="theme"
            />
          </div>
        </ul>
        <div className="nav-close" onClick={showList} id="nav-close">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div
        className={`nav-toggle ${hideList ? "hide" : ""}`}
        onClick={showList}
        id="nav-toggle"
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
