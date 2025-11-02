import React, { useContext, useState } from "react";
import Message from "./Message";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { AppContext } from "../../context/AppContext";

const Chat = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loader, setLoader] = useState(false);  

  const {login, setLogin} = useContext(AppContext);
  // const [chat, setChat] = useState([
  //   { res: "user", text: "who are you?" },
  //   { res: "ai", text: "Hello i am a chatAi" },
  //   { res: "user", text: "what can you do for me>" },
  //   { res: "ai", text: "Anything i can do for you to give you any information." },
  //   { res: "user", text: "wow nice!" },
  //   { res: "ai", text: "tell me what you want to need." },
  // ]);

  const changeText = (e) => {
    setInput(e.target.value);
  };
  const fetchData = async (query) => {
    try {
      setLoader(true)
      const response = await axios.post("http://localhost:5000/fetch-data", {
        query,
      });
      const obj = {
        id: Date.now(),
        res: "ai",
        text: response.data.data,
      };
      setChat((prevChat) => [...prevChat, obj]);
      setLoader(false);
    } catch (e) {
      console.log("Error occured: ", e);
      const obj = {
        id: Date.now(),
        res: "ai",
        text: "❌ Something went wrong! Please try after some time.",
      };
      setChat((prevChat) => [...prevChat, obj]);
      setLoader(false);
    }
  };
  const queryHandle = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const obj = {
        id: Date.now(),
        res: "user",
        text: input,
      };
      setChat((prevChat) => [...prevChat, obj]);
      fetchData(input);
      setInput("");
    }
  };

  
  return (
    <div
      className="chat-container"
      style={chat.length > 0 ? {} : { height: "100vh" }}
      
    >
      {/* <div className="chat-box">
        <div className="ai-text">
          <div className="msg ai">
            <p>
              Hello i am chatAi. Hello i am chatAi.Hello i am chatAi.Hello i am
              chatAi.Hello i am chatAi.Hello i am chatAi.Hello i am chatAi.Hello
              i am chatAi.Hello i am chatAi.Hello i am chatAi.Hello i am chatAi.
            </p>
          </div>
        </div>
        <div className="user-text">
          <div className="msg user">
            <p>
              Hello i am chatAi. Hello i am chatAi.Hello i am chatAi.Hello i am
              chatAi.Hello i am chatAi.Hello i am chatAi.Hello i am chatAi.Hello
              i am chatAi.Hello i am chatAi.Hello i am chatAi.Hello i am chatAi.
            </p>
          </div>
        </div>
      </div> */}
      {chat.length > 0 ? (
        <div className="chat-box" style={login?{opacity:.5}:{}}>
          {chat.map((data, i) => (
            <Message key={i} data={data}></Message>
          ))}
          {loader && <div className="loader">
            <ThreeDots
              visible={true}
              height="40"
              width="40"
              color="#3244db"
              radius="5"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>}
        </div>
      ) : (
        ""
      )}

      <div className="input-box" style={login?{opacity:.5}:{}}>
        <p className={chat.length > 0 ? "hide-text" : ""}>
          What are you working on?
        </p>
        <input
          type="text"
          value={input}
          onChange={changeText}
          onKeyDown={queryHandle}
          placeholder="Ask anything..."
          disabled={loader}          
        />
      </div>
    </div>
  );
};

export default Chat;
