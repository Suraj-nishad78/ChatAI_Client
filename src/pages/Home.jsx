import React from "react";
import Chat from "../components/chat/Chat";
import ChatIntro from "../components/ChatIntro";
import Ai_Brief from "../components/Ai_Brief";
import Testimonials from "../components/Testimonials";

const Home = () => {
    
  return (
    <>
      <Chat></Chat>
      <ChatIntro></ChatIntro>
      <Ai_Brief></Ai_Brief>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
