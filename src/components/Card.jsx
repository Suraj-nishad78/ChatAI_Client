import React, { useState } from "react";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <>
      <div className="upgrade-cart-container">
        <div
          className="upgrade-cart-title"
          onMouseOver={handleShow}
          onMouseOut={handleHide}
        >
          <img src={data.url} alt="home-icon" />
          <h1>{data.name}</h1>
          <div className="upgrade-price">
            <h2>{data.price}</h2>
            <span>$</span>
          </div>
          <h3>Per Month</h3>
          <p>{data.desc}</p>
          <button>Buy NOW</button>
        </div>
        {show && (
          <div
            className="upgrade-cart-content"
            onMouseOver={handleShow}
            onMouseOut={handleHide}
          >
            <h1>What will you get?</h1>
            {data.text.map((item, i) => (
              <div className="cart-list" key={i}>
                <img src={data.tick} alt="blue-tick" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
