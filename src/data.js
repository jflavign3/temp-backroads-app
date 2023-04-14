import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 11, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 12, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 13, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 2, 2002",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "canada",
    duration: "6 days",
    cost: 2500,
  },
  {
    id: 2,
    image: tour2,
    date: "july 12, 2002",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: "6 days",
    cost: 2100,
  },
  {
    id: 3,
    image: tour3,
    date: "may 26, 2002",
    title: "Explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: "5 days",
    cost: 3100,
  },
  {
    id: 4,
    image: tour4,
    date: "may 26, 2002",
    title: "KENYA",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquvitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "africa",
    duration: "8 days",
    cost: 500,
  },
];
