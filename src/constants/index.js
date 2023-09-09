import { services01, services02, services03, bImage, cImage } from "../assets";

import { HiCheck } from "react-icons/hi";
export const navLinks = [
  {
    id: "Green Loans",
    title: "Green Loans",
  },
  {
    id: "Tradies and Installers",
    title: "Tradies and Installers",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "login",
    title: "Login",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    id: "services-1",
    img: services01,

    content: "Are you looking for a loan and need a tradesperson?",
    buttonText: "Find Out More",
  },
  {
    id: "services-2",
    img: services02,

    content:
      "Is your tradesperson already registered with us and you’re ready to apply?",
    buttonText: "Apply Now",
  },
  {
    id: "services-3",
    img: services03,
    content: "Are you a tradesperson looking to register?",
    buttonText: "Register Here",
  },
];

export const servicesGroupB = [
  {
    id: "services-1",
    img: bImage,
    title: "COMPETITIVE GREEN RATES",

    content: [
      {
        icon: HiCheck,
        content:
          "At Finkey, we’ve made our application process so agile that you could be approved in minutes.",
      },
      {
        icon: HiCheck,
        content:
          "If you want to incorporate sustainable materials or add green or efficient technology into your home renovation, congratulations! You qualify for our green loan!",
      },
      {
        icon: HiCheck,
        content:
          "We will provide finance for most projects where there is a material improvement in home sustainability and energy efficiency.",
      },
    ],
  },
];

export const servicesGroupC = [
  {
    id: "servicesC-1",
    img: cImage,
    title:
      "FIND OUT How you could take advantage of our Green rates for loans between $5,000 and $50,000 starting from 6.49% pa.",
    content: [
      {
        icon: HiCheck,
        sub: "GREEN PROJECT LOANS",
      },
      {
        icon: HiCheck,
        sub: "GREEN RENOVATION LOANS",
      },
    ],
  },
];

export const servicesGroupD = [
  {
    id: "services-1",
    img: bImage,
    title: "HOW TO GET A GREEN RATE",

    content: [
      {
        content:
          "If you’re a tradie, become a part of our dynamic community of tradies – installers, builders, and project managers who have partnered with Finkey to get paid on time every time.",
      },
      {
        content:
          "You may already be incorporating materials or technology into your projects that would qualify your customer for a Personal Green Rate.",
      },
    ],
  },
];
