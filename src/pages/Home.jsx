import React, { useContext } from "react";
import Chat from "../components/chat/Chat";
import ChatIntro from "../components/ChatIntro";
import Ai_Brief from "../components/Ai_Brief";
import Testimonials from "../components/Testimonials";
import Landing from "../components/Landing";
import Bottom_Title from "../components/Bottom_Title";

const Home = () => {
  return (
    <>
      <Landing></Landing>
      <ChatIntro></ChatIntro>
      <Ai_Brief></Ai_Brief>
      <Testimonials></Testimonials>
      <Bottom_Title></Bottom_Title>
    </>
  );
};

export default Home;
