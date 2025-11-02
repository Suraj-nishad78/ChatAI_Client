import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import ai_image from "./ai_image.jpg";

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    ai_image
}


export const stepsData = [
  {
    title: 'Ask Your Question',
    description:
      'Type your query — from coding to creative writing — just like chatting with a human.',
    icon: step_icon_1,
  },
  {
    title: 'AI Processes Your Query',
    description:
      'Our chat model understands your context and delivers quick, human-like answers.',
    icon: step_icon_2,
  },
  {
    title: 'Get Answers & Continue',
    description:
      'Read, refine, or ask more — the chat learns from each conversation.',
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'John Watson',
    role: 'Software Developer',
    stars: 4,
    text: `I've been using ChatAI for almost two years to debug code and learn new concepts. It’s incredibly intuitive and saves me hours every week.`,
  },
  {
    image: profile_img_2,
    name: 'Michael Reed',
    role: 'Content Strategist',
    stars: 4,
    text: `Absolutely mind-blowing! This AI chat assistant exceeded all my expectations. A must-have for writers and creators. Great tool for productivity.`,
  },
  {
    image: profile_img_1,
    name: 'Max Turner',
    role: 'Project Manager',
    stars: 5,
    text: `It’s perfect for brainstorming ideas and crafting messages when you’re short on time. The responses feel natural and truly helpful. Love it!`,
  },
];


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]