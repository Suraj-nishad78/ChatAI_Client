import React, { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { AppContext } from "../../context/AppContext";
import generateContent from "../../gimini/gimini";

const Chat = () => {
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);
  const { login, setLogin, chat, setChat } = useContext(AppContext);
  const textareaRef = useRef(null);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "What are you working on?";

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
      setLoader(true);
      // const response = await axios.post(
      //   `${import.meta.env.VITE_API_URL}fetch-data`,
      //   {
      //     query,
      //   }
      // );
      // const obj = {
      //   id: Date.now(),
      //   res: "ai",
      //   text: response.data.data,
      // };
      const response = await generateContent(query);
      const obj = {
        id: Date.now(),
        res: "ai",
        text: response,
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

  const handleQuery = () => {
    if (input.trim() === "") return;

    const obj = {
      id: Date.now(),
      res: "user",
      text: input,
    };

    setChat((prevChat) => [...prevChat, obj]);
    fetchData(input);
    setInput("");
  };

  const queryHandle = (e) => {
    if (e.key === "Enter" && e.shiftKey) return; // Allow Shift+Enter for newline

    if (e.key === "Enter") {
      e.preventDefault(); // prevent new line
      handleQuery();
    }
  };

  /*------------- */

  // Auto-resize whenever text changes
  useEffect(() => {
    const ta = textareaRef.current;
    const maxHeight = 200;
    if (!ta) return;

    // reset height to auto to allow shrinking
    ta.style.height = "auto";

    const needed = ta.scrollHeight;
    const capped = Math.min(needed, maxHeight);

    ta.style.height = capped + "px";
    ta.style.overflowY = needed > maxHeight ? "auto" : "hidden";
  }, [input]);
  /*------------- */

  useEffect(() => {
    const chatBox = document.querySelector(".chat-box");
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
  }, [chat]);

  /*------------*/

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100); // typing speed (ms per letter)

    return () => clearInterval(interval);
  }, []);
  /*------------*/

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
        <div className="chat-box" style={login ? { opacity: 0.5 } : {}}>
          {chat.map((data, i) => (
            <Message key={data.id} data={data}></Message>
          ))}
          {loader && (
            <div className="loader">
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
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div
        className={chat.length > 0 ? "input-box input-box-abs" : "input-box"}
        style={login ? { opacity: 0.5 } : {}}
      >
        <p className={chat.length > 0 ? "hide-text" : ""}>
          {/* What are you working on? */}
          {displayedText}
        </p>
        {/* <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={changeText}
          onKeyDown={queryHandle}
          disabled={loader}
          className="chat-textarea"
          placeholder="Ask anything..."
        /> */}
        <div className="textarea-for-repo">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={changeText}
            onKeyDown={queryHandle}
            disabled={loader}
            placeholder="Ask anything..."
            // className="chat-textarea"
          />
          {input.trim() && (
            <span onClick={handleQuery}>
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
