import { v4 as uuidv4 } from "uuid";

const BUCKET_URL = import.meta.env.VITE_BUCKET_URL;

const projectsDetails = [
  {
    id: uuidv4(),
    title: "Appointment Manager",
    emoji: "📅",
    technologies: "React, CSS, Node.js, MongoDB, Express, JWT",
    description:
      "Appointment manager system that allow businesses to handle customers and schedule appointments. Includes user authentication and a profile page to personalize business information and working hours.",
    keyPoints: [
      "Login and signup with JWT authentication",
      "CRUD for users and appointments",
      "Working hours and business information management",
      "MongoDB for data persistence",
    ],
    repo: "https://github.com/gedadev/appointment-manager/",
    url: "https://appointment-manager.pages.dev",
    preview: [
      {
        url: `${BUCKET_URL}appointment-manager/1.png`,
        alt: "Landing page",
      },
      {
        url: `${BUCKET_URL}appointment-manager/2.png`,
        alt: "Login page",
      },
      {
        url: `${BUCKET_URL}appointment-manager/3.png`,
        alt: "Dashboard view",
      },
      {
        url: `${BUCKET_URL}appointment-manager/4.png`,
        alt: "Appointments created",
      },
      {
        url: `${BUCKET_URL}appointment-manager/5.png`,
        alt: "Appointment modal",
      },
      {
        url: `${BUCKET_URL}appointment-manager/6.png`,
        alt: "Profile page",
      },
      {
        url: `${BUCKET_URL}appointment-manager/7.png`,
        alt: "Working hours page",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "League of Legends Mastery Tracker",
    emoji: "🎮",
    technologies: "React, TailwindCSS, Node.js, Express, API REST",
    description:
      "This application consumes the Riot Games API to show the champions of a player ordered by mastery level. Allow advanced filtering to explore the performance of the player.",
    keyPoints: [
      "Integration with the Riot Games official API",
      "Filters by champion role, difficulty and mastery level",
      "Detailed view for each champion",
      "Backend with Express to handle API requests",
    ],
    repo: "https://github.com/gedadev/lol-mastery",
    url: "https://lol-mastery.pages.dev/",
    preview: [
      {
        url: `${BUCKET_URL}lol-mastery/1.png`,
        alt: "Home view with search bar and top players",
      },
      {
        url: `${BUCKET_URL}lol-mastery/2.png`,
        alt: "Player champions view",
      },
      {
        url: `${BUCKET_URL}lol-mastery/3.png`,
        alt: "Champion stats toggled",
      },
      {
        url: `${BUCKET_URL}lol-mastery/4.png`,
        alt: "Champion page details",
      },
      {
        url: `${BUCKET_URL}lol-mastery/5.png`,
        alt: "Champion page end",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "E-commerce Store",
    emoji: "🛒",
    technologies: "React, Javascript, Context API, CSS",
    description:
      "Online store with a products catalog, search and filtering, and a shopping cart functionality. The data is fetched from dummyjson utility to simulate the complete process of an e-commerce store",
    keyPoints: [
      "Dynamic product listing",
      "Filtering by category and brand",
      "Shopping cart with local persistence",
      "Checkout simulation",
    ],
    repo: "https://github.com/gedadev/ecommerce",
    url: "https://ecommerce-96b.pages.dev",
    preview: [
      {
        url: `${BUCKET_URL}ecommerce/1.png`,
        alt: "Home page view",
      },
      {
        url: `${BUCKET_URL}ecommerce/2.png`,
        alt: "Products page view",
      },
      {
        url: `${BUCKET_URL}ecommerce/3.png`,
        alt: "Product filtering",
      },
      {
        url: `${BUCKET_URL}ecommerce/4.png`,
        alt: "Product details page",
      },
      {
        url: `${BUCKET_URL}ecommerce/5.png`,
        alt: "Cart page view",
      },
    ],
  },
];

export default projectsDetails;
