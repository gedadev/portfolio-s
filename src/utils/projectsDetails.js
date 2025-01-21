import { v4 as uuidv4 } from "uuid";

const projectsDetails = [
  {
    id: uuidv4(),
    title: "E-commerce Store",
    technologies: "react, javascript, html, css",
    description:
      "An e-commerce application offers utilities like a shopping cart, a product catalog and a login section. With the possibility to add more useful features to enhance the shopping experience.",
    repo: "https://github.com/gedadev/ecommerce",
    url: "https://ecommerce-96b.pages.dev",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/ecommerce/1.png",
        alt: "Home page view",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/ecommerce/2.png",
        alt: "Products page view",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/ecommerce/3.png",
        alt: "Product filtering",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/ecommerce/4.png",
        alt: "Product details page",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/ecommerce/5.png",
        alt: "Cart page view",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Lol Champions Mastery",
    technologies: "react, javascript, html, tailwindcss",
    description:
      "This application shows the mastery level of a player's champions, displaying information such as the champion level, the champion mastery points and other data provided by the public Riot Games API.",
    repo: "https://github.com/gedadev/lol-mastery",
    url: "https://lol-mastery.pages.dev/",
    preview: [
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/lol-mastery/1.png",
        alt: "Home view with search bar and top players",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/lol-mastery/2.png",
        alt: "Player champions view",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/lol-mastery/3.png",
        alt: "Champion stats toggled",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/lol-mastery/4.png",
        alt: "Champion page details",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/lol-mastery/5.png",
        alt: "Champion page end",
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
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/weather/1.png",
        alt: "forecast preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/weather/2.png",
        alt: "end slider preview",
      },
      {
        url: "https://pub-1d0f11ab543f45ecb624359bc1a436a7.r2.dev/portfolio%20assets/weather/3.png",
        alt: "search city preview",
      },
    ],
  },
];

export default projectsDetails;
