import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import Image from "./pages/Image";

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(false);
  const contextData = { login, setLogin, userId, setUserId };

  //Work For 03-11-2025
  // 1.Today work on it to make profile section 
  // https://www.sliderrevolution.com/wp-content/uploads/2021/06/boot1.jpg
  // 2.Image uplaod section in the profile & backend patch or put route for update
  // 3.check for imageurl get byt google is working or not based on this make a if else condition on both frontend & backend 


  useEffect(()=>{
    const id = localStorage.getItem("userId");
    if(id){
      setUserId(id);
    }
  },[])
  return (
    <>
      <AppContext.Provider value={contextData}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/image" element={<Image />}></Route>
          <Route path="/upgrade" element={<Dashboard />}></Route>
        </Routes>
        <Footer></Footer>
        {login && <Form></Form>}
      </AppContext.Provider>
    </>
  );
}

export default App;
