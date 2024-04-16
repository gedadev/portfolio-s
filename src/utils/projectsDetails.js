import { v4 as uuidv4 } from 'uuid';

const projectsDetails = [
  {
    id: uuidv4(),
    title: 'Magazine',
    technologies: 'react, javascript, html, css',
    description: 'A magazine template with a split screen approach. This app is built with React, creating this design with CSS and Javascript',
    repo: 'https://github.com/gedadev/magazine',
    url: 'https://magazine-0b0.pages.dev',
    preview: [
      {
        url: 'https://i.ibb.co/0KJtqjg/Screenshot-2024-04-15-at-22-16-28.png',
        alt: 'initial view'
      },
      {
        url: 'https://i.ibb.co/jWmzYL5/Screenshot-2024-04-15-at-22-17-08.png',
        alt: 'scrolled view'
      },
      {
        url: 'https://i.ibb.co/SBgZxM8/Screenshot-2024-04-15-at-22-16-44.png',
        alt: 'displayed menu'
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Online Store',
    technologies: 'react, javascript, html, css',
    description: 'An online store created with the "fake Store API". I used tools like context API to keep track of the shopping cart in the components that require the interaction with the cart. I build this app with React in the frontend, fetching the data with axios.',
    repo: 'https://github.com/gedadev/shopping-cart',
    url: 'https://shopping-cart-9kh.pages.dev',
    preview: [
      {
        url: 'https://i.ibb.co/vv1pckR/27PFZ6c.png',
        alt: 'home section preview'
      },
      {
        url: 'https://i.ibb.co/s1Fkr4N/jfTqxRM.png',
        alt: 'home section bottom preview'
      },
      {
        url: 'https://i.ibb.co/QYnFZh1/VViZeHT.png',
        alt: 'products section preview'
      },
      {
        url: 'https://i.ibb.co/DtbJdYg/61bVahD.png',
        alt: 'cart preview'
      },
      {
        url: 'https://i.ibb.co/yXBVBXr/T1OD0W0.png',
        alt: 'contact section preview'
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Expenses Manager',
    technologies: 'react, javascript, html, css, mongoDB, express',
    description: 'A react app that tracks the daily expenses and allow the user to classify the expenses by categories, a pay method and if is a recurrent expense. I build this app with React in the frontend, Express in the backend, and mongoDB to store the data.',
    repo: 'https://github.com/gedadev/finance-manager',
    url: 'https://finance-manager.pages.dev/',
    preview: [
      {
        url: 'https://i.ibb.co/7KYT9mY/LOWmR1E.png',
        alt: 'expenses table preview'
      },
      {
        url: 'https://i.ibb.co/GPGjY6P/mMhCp98.png',
        alt: 'add expense modal preview'
      },
      {
        url: 'https://i.ibb.co/KL3W4Ft/DvwTbJ2.png',
        alt: 'filters preview'
      },
      {
        url: 'https://i.ibb.co/5T4mhhJ/sFWLbzO.png',
        alt: 'update expense modal preview'
      },
      {
        url: 'https://i.ibb.co/ncC7Bzd/vcJD3MR.png',
        alt: 'manage options preview'
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Weather Report App',
    technologies: 'react, javascript, html, css',
    description: 'A weather app created with the "weather API". This app can show the forecast on your current location if you allow the location permission, otherwise you can search for a city to get the respective forecast',
    repo: 'https://github.com/gedadev/weather-app',
    url: 'https://weather-app-er8.pages.dev/',
    preview: [
      {
        url: 'https://i.ibb.co/YDpxLwp/7DjcAJ7.png',
        alt: 'forecast preview'
      },
      {
        url: 'https://i.ibb.co/QdG7kD6/qSOrB4N.png',
        alt: 'end slider preview'
      },
      {
        url: 'https://i.ibb.co/gJjv023/wtAWMV2.png',
        alt: 'search city preview'
      },
    ],
  },
];
  
  export default projectsDetails;