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
import { ToastContainer } from "react-toastify";
import Chat from "./components/chat/Chat";

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const contextData = {
    login,
    setLogin,
    userId,
    setUserId,
    showChat,
    setShowChat,
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);
  return (
    <>
      <AppContext.Provider value={contextData}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upgrade" element={<Dashboard />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
        <Footer></Footer>
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
