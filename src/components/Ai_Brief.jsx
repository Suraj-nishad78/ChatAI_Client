import React from 'react'
import { assets } from '../assets/assets'

const Ai_Brief = () => {
  return (
    <div className='ai-brief-container'>
        <div className='ai-brief-title'>
            <h1>Chat With Ai</h1>
            <p>Turn your questions into instant answers.</p>
        </div>
        <div className='ai-brief-content'>
            <div className="ai-brief-img">
                <img src={assets.ai_image} loading='lazy'/>
            </div>
            <div className='ai-brief-into'>
                <h1>Introducing The AI-Powered Chat Assistant!</h1>
                <p>Easily bring your ideas to life with our free AI chat assistant. Whether you need clear answers, smart suggestions, or creative content, our tool transforms your text into meaningful conversations within seconds.</p>
                <p>Simply type your question or prompt, and our cutting-edge AI will generate accurate, thoughtful responses in seconds. From coding help to creative writing and complex explanations, even the toughest ideas become clear effortlessly!</p>
            </div>
        </div>
    </div>
  )
}

export default Ai_Brief
