
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import rating_star from "./rating_star.svg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star_group.png";
import profile_icon from "./profile_icon.png";
import ai_image from "./ai_image.jpg";

export const assets = {
  facebook_icon,
  instagram_icon,
  twitter_icon,
  rating_star,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  profile_icon,
  ai_image,
};

export const stepsData = [
  {
    title: "Ask Your Question",
    description:
      "Type your query — from coding to creative writing — just like chatting with a human.",
    icon: step_icon_1,
  },
  {
    title: "AI Processes Your Query",
    description:
      "Our chat model understands your context and delivers quick, human-like answers.",
    icon: step_icon_2,
  },
  {
    title: "Get Answers & Continue",
    description:
      "Read, refine, or ask more — the chat learns from each conversation.",
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: "John Watson",
    role: "Software Developer",
    stars: 4,
    text: `I've been using ChatAI for almost two years to debug code and learn new concepts. It’s incredibly intuitive and saves me hours every week.`,
  },
  {
    image: profile_img_2,
    name: "Michael Reed",
    role: "Content Strategist",
    stars: 4,
    text: `Absolutely mind-blowing! This AI chat assistant exceeded all my expectations. A must-have for writers and creators. Great tool for productivity.`,
  },
  {
    image: profile_img_1,
    name: "Max Turner",
    role: "Project Manager",
    stars: 5,
    text: `It’s perfect for brainstorming ideas and crafting messages when you’re short on time. The responses feel natural and truly helpful. Love it!`,
  },
];

export const plans = [
  {
    name: "BASIC",
    url: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3YxMTgxLXR1LWVsZW1lbnQtMjUwLXAtbTN3cXR3dTEucG5n.png",
    price: 9,
    desc: "The upgrade package includes faster performance, extra storage.",
    text: [
      "Essential AI chat and task assistance",
      "Standard performance with reliable speed",
      "Basic customization and workflow tools",
      "Limited memory and saved sessions",
      "Community access and basic support",
    ],
    tick: "https://static.vecteezy.com/system/resources/previews/035/113/438/non_2x/check-circle-icon-black-tick-symbol-isolated-on-white-background-vector.jpg",
  },
  {
    name: "PERSONAL",
    url: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
    price: 19,
    text: [
      "Advanced reasoning and smart suggestions",
      "Priority performance and response speed",
      "Personalized settings and saved projects",
      "Extended memory and multi-session history",
      "Creative tools with moderate automation",
    ],
    desc: "The upgrade package includes faster performance, extra storage.",
    tick: "https://static.vecteezy.com/system/resources/previews/035/113/438/non_2x/check-circle-icon-black-tick-symbol-isolated-on-white-background-vector.jpg",
  },
  {
    name: "BUSINESS",
    url: "https://png.pngtree.com/element_our/20190531/ourmid/pngtree-men-s-work-bag-icon-image_1287805.jpg",
    price: 49,
    text: [
      "Essential AI chat and task assistance",
      "Team collaboration and shared workspaces",
      "Unlimited project memory and analytics",
      "Advanced security and admin controls",
      "Dedicated support and early feature access",
    ],
    desc: "The upgrade package includes faster performance, extra storage.",
    tick: "https://static.vecteezy.com/system/resources/previews/035/113/438/non_2x/check-circle-icon-black-tick-symbol-isolated-on-white-background-vector.jpg",
  },
];
