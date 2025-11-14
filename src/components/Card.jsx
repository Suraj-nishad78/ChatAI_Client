import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);
  const{login, setLogin, userId, setUserId} = useContext(AppContext);

  const handleShow = (e) => {
    setShow(true);
  };
  const handleHide = (e) => {
    setShow(false);
  };
  const handleForm = () =>{
    setLogin(true);
  }

  return (
    <>
      <div className="upgrade-cart-container">
        <div
          className="upgrade-cart-title"
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
        >
          <img src={data.url} alt="home-icon" />
          <h1>{data.name}</h1>
          <div className="upgrade-price">
            <h2>{data.price}</h2>
            <span>$</span>
          </div>
          <h3>Per Month</h3>
          <p>{data.desc}</p>
          <button onClick={userId?"":handleForm}>Buy NOW</button>
        </div>
        {
          <div
            className={`${
              show
                ? "upgrade-cart-content"
                : "upgrade-cart-content upgrade-hide"
            }`}
            onMouseEnter={handleShow}
            onMouseLeave={handleHide}
          >
            <h1>What will you get?</h1>
            {data.text.map((item, i) => (
              <div className="cart-list" key={i}>
                <img src={data.tick} alt="blue-tick" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default Card;
