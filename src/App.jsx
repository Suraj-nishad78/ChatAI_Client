import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Chat_Page from "./pages/Chat_Page";

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [userData, setUserData] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  const contextData = {
    login,
    setLogin,
    userId,
    setUserId,
    showChat,
    setShowChat,
    userData, 
    setUserData
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  useEffect(()=>{
    if(location.pathname==="/chat"){
      setShowFooter(false);
    }else{
      setShowFooter(true);
    }
  },[location])
  return (
    <>
      <AppContext.Provider value={contextData}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upgrade" element={<Dashboard />}></Route>
          <Route path="/chat" element={<Chat_Page />}></Route>
        </Routes>
        {showFooter && <Footer></Footer>}
        {login && <Form></Form>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AppContext.Provider>
    </>
  );
}

export default App;
