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

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(false);
  const contextData = { login, setLogin, userId, setUserId };

  //Work for 05-11-2025
  //https://img.freepik.com/premium-vector/subscription-plans-price-list-collection-landing-page-section_405867-89.jpg
  // Work on upgrade section

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
