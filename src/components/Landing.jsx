import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { showChat, setShowChat } = useContext(AppContext);
  const navigate = useNavigate();

  const handleShowChat = () =>{
    navigate("/chat")
  }
  return (
    <div className='landing-container'>
        <h1>AI video editing that's less work, more flow</h1>
        <p>If you can type, drag-and-deep, copy-and-paste, you can make pro-quality video in descript. It's an AI video editor that's as easy as a doc.</p>
        <button onClick={handleShowChat} >Get started for free &rarr;</button>
    </div>
  )
}

export default Landing
