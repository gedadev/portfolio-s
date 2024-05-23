import { v4 as uuidv4 } from "uuid";

const projectsDetails = [
  {
    id: uuidv4(),
    title: "Lol Champions Mastery",
    technologies: "react, javascript, html, tailwindcss",
    description:
      "This application shows all the champions of a summoner providing the game name and the tag line, showing information like the champion level, the champion points and other information provided by the official Riot Games API.",
    repo: "https://github.com/gedadev/lol-mastery",
    url: "https://lol-mastery.pages.dev/summoner",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/lol-champs-app/screen1.png",
        alt: "initial form",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/lol-champs-app/screen2.png",
        alt: "response view",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/lol-champs-app/screen3.png",
        alt: "scrolled menu",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Online Store",
    technologies: "react, javascript, html, css",
    description:
      'An online store created with the "fake Store API". I used tools like context API to keep track of the shopping cart in the components that require the interaction with the cart. I build this app with React in the frontend, fetching the data with axios.',
    repo: "https://github.com/gedadev/shopping-cart",
    url: "https://shopping-cart-9kh.pages.dev",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/cart/screen1.png",
        alt: "home section preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/cart/screen2.png",
        alt: "home section bottom preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/cart/screen3.png",
        alt: "products section preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/cart/screen4.png",
        alt: "cart preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/cart/screen5.png",
        alt: "contact section preview",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Expenses Manager",
    technologies: "react, javascript, html, css, mongoDB, express",
    description:
      "A react app that tracks the daily expenses and allow the user to classify the expenses by categories, a pay method and if is a recurrent expense. I build this app with React in the frontend, Express in the backend, and mongoDB to store the data.",
    repo: "https://github.com/gedadev/finance-manager",
    url: "https://finance-manager.pages.dev/",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/expenses/screen1.png",
        alt: "expenses table preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/expenses/screen2.png",
        alt: "add expense modal preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/expenses/screen3.png",
        alt: "filters preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/expenses/screen4.png",
        alt: "update expense modal preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/expenses/screen5.png",
        alt: "manage options preview",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Weather Report App",
    technologies: "react, javascript, html, css",
    description:
      'A weather app created with the "weather API". This app can show the forecast on your current location if you allow the location permission, otherwise you can search for a city to get the respective forecast',
    repo: "https://github.com/gedadev/weather-app",
    url: "https://weather-app-er8.pages.dev/",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/weather/screen1.png",
        alt: "forecast preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/weather/screen2.png",
        alt: "end slider preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/weather/screen3.png",
        alt: "search city preview",
      },
    ],
  },
];

export default projectsDetails;
