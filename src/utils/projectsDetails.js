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
        url: 'https://lh3.googleusercontent.com/pw/AP1GczPPluFV_fCTYKgkJsU4HLRYic1tFdq0ogj_jxXtRXEyOcRZx4rAJ0B0fDEbtk4t3M3xwWE1JOR7SGt8GhWNkDpf94_54hvgIX21lnNrHS0jdrsVqb5BiaTPuwsIvtiurN6GZTcOMVsfc1u2fLS1s1uSrJ_zRjSWm1iMmSW3xPJEEHbBKCodoSAIyhx0qZFUeQK1RVdnMpIDmRpQFdHvhsMcNIhMAkF5wdneQ6WW4V8AmV03BW_VZnBTpBoFsNKndznywdzbtIO91Cb0_HeaLwaqmaFJAxhWle1F6R7zYyuBpDPgx_2xrzkBD4GqA5aGoCT0x-RxYPXBu9RhFsp2BgCFERrwwUa0gD6kD1u0QPJy1HU2Bn8IhK1RYhXx9UKGVBVlAsFQJS45uzdB75BO0XyigtsB25kU7vGkUx82K8o6Xys31VZVkAnuDe1BbMZx4wPLRd2IJnw0uJ-uu3MKflybLOI0j4pptNs2CfxM3bqXfvMMgAL-1nVNIh9ODYoP_xe2Nvu2NhmsA16i0QxcIiFv989zn1_DDoczq9NA3_ZhbR8v9jTRtBubqMhbwKTbFBpT8WlQWs3Bat0ggn3BJQZnclaieTnxJ4A-UiP1o4rcjFg8nHFJr8xVGARzG09KrGBeb57uFRStrTu03e_NBzBHO2LEo8qLgIZgAQt65q3hlqfhZCDABma5_5H74GURIdn-MwKP69TcuoVCQcmxEHFjHc2ZiwcBNdGcHs2N4fjO3bExN9n9A4CZ-HueNEmReaEsvk2we4j447Cmm_ZasgjsthSsUqa6NKhfhlh5NEVu7VhVJEASq_Cbe2XCC6AbPrm8Mw7FXYpD24mDwA35KRK3QDPKhnobQRu8vAzdET3QRPCgH1GlK6z18qQBEOe8-OjASEa4clGHC-J0QUmc0ds=w1721-h968-s-no-gm?authuser=0',
        alt: 'initial view'
      },
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczNgxtiWnmoJu8lT_lWE1a4yuUnoL2aNDRpx6xm2xdrDlj9f8Ir0SNM6ZPaz3cJH-CqQNTa6y2mTW6htFQN0M8V1WOje3M_e44HXbF8uhqmeUUqHlcubc9m1tLdxJOOlNiWGOHdWSihzYM30t-b9HUpwN6t5gWXepw5peLJ9hqp0C6UTmpqQbPxUzgY8w47oFMDtGKnIUAbcN9H1ssFkHA-m4sAbbWXsftdm8t5UIrQc90mJiKDUW7UdXUar_wPXvNC0CJ6gUrPSkhCQMO5ZGy0v1CBR_k560aoqmUOF3k63fwSlvb0e52ivHFDjAGnMyN62lOaf8HFZcUy-8JKQ59FPEdlImAVaPrlQuELXE5xQfSbCVWbm_918LS7WOQgTP_RD9jjaFbsKwLOriPCrqiA0m9lowrMxiVwFzcF9weDCjWWLgYgHxX0Ya-DOfWKDt5wap6s5Kgxf8dbwlPrxNLLews6c9tcJB1_KYlsfpft5TKvY2QotAHrMNc0KnV65dPErp33O0IUj1moRUsafIZJh8ng3nMgKgoyP_U_s4WeOrNs63PtLO_0Ym1w4cuG0IuIbV0qCGSgpXGJW5qpzWVsOJZtsD7jFEFcou17HShcar6kf32W2JN5y6Dp7lrQdASz2P6wSNNujzdMzYZGmIzWUhihc7r4gp253fkvw265xLKJF0N_ocUpQkSsFXzPhHOTIpTSFFzLynJEFQ0Un1hftkZAhBRxntffY8J_VASiNDb48U436nx5qxPlmg8t5njOj2IkfYarvAf3_l4bQze4RZneB-rbiMBLR24dHOw9ZlN15F6cIpqgGlJ6Tk_AQZHm3qyeDuSntW1sxrHC-vfkVOu6W-1CpIxtKdrFrAdzu9mrKyoFwi_W-fYYdUuhraTe9yW245KcaNRwmqQfNag4=w1721-h968-s-no-gm?authuser=0',
        alt: 'scrolled view'
      },
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczP4KdFbmmI3BpkQ4VTAuEbRbd2x3FGIAuGKY_wTYQns7hqNe8W9nnDOeYYdwMKVYalQfmJVpssC6FAnA3G50yYDP88nLznppuWxwCazRv-w3sQXBlJvYk3KRQYkK_KYLrA-cLcJaH4V6rNsQQrR7VKR34OY4sZNsOxt-Zq6Y6CPLbTWe0-D3gFytQxUqBAXqHMYNuSBqGojfp4qFiiLm4xXIBHzkVwagppEjoPxEPBE5DVAKan13vyXZQG30waR-pg-X-9xxQqN4-d59GYzUMQMHpS0apqhlOhiAuvQMXEy2aT07pGeZwbJKGR2DxTuMm7HO5L7J8sEhbFP-Hj2RMKKoaLpAJANb7vOJFdvs_6klZZ5krq-YDlVpqdpuiK7j8tNa4HohVPYgNNsqPOpT5-1LXJef2Ytw7Xvo3EpTWJBo6uLY8FFjdNF6KajeJ-uFKZ06y2VZhcF6SUPIMrYB-qyVf48aTOcQKfbETAB4SmmmJcLjo7hGooxzIVmSMahQmGzTCvm8BTSwF06nris6hecAzqGzzsuecAonfqz3KcjY0-VkBq3sHQlT9Q6C4HzOZBu7vT5rzP6WkDE1nOISTqgm3E8Xa-U9wvYaikwXNB_axsJ03oNTQjkI8GPDFcGjtuq6Y91OP7535-9y60XqxO2hsKjz1A8Bbqj42_03ULac45muLqH9YSWShw7VYGpXW25uGx7ohUyA0RsdMjKYgxRPp4moI28vPfNW1XtWLmTXsseYejF1dOGhnaMAVu8gJsHCPIsOJE9FtCBCzKUpxWxtXEBXG3fybb_FRFzFVoR_PLohQjdyMpTT00rV1PKxP5ZDVCOtIwZWkxAB9Uo-3ofrwNBKq1qO_JeuwXe9MOojmQ70N6JDFXOCI0xsOIKJMjhvQojeq5A8cSH3YGEgCI=w1721-h968-s-no-gm?authuser=0',
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
        url: 'https://i.imgur.com/27PFZ6c.png',
        alt: 'home section preview'
      },
      {
        url: 'https://i.imgur.com/jfTqxRM.png',
        alt: 'home section bottom preview'
      },
      {
        url: 'https://i.imgur.com/VViZeHT.png',
        alt: 'products section preview'
      },
      {
        url: 'https://i.imgur.com/61bVahD.png',
        alt: 'cart preview'
      },
      {
        url: 'https://i.imgur.com/T1OD0W0.png',
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
        url: 'https://i.imgur.com/LOWmR1E.png',
        alt: 'expenses table preview'
      },
      {
        url: 'https://i.imgur.com/mMhCp98.png',
        alt: 'add expense modal preview'
      },
      {
        url: 'https://i.imgur.com/DvwTbJ2.png',
        alt: 'filters preview'
      },
      {
        url: 'https://i.imgur.com/sFWLbzO.png',
        alt: 'update expense modal preview'
      },
      {
        url: 'https://i.imgur.com/vcJD3MR.png',
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
        url: 'https://i.imgur.com/7DjcAJ7.png',
        alt: 'forecast preview'
      },
      {
        url: 'https://i.imgur.com/qSOrB4N.png',
        alt: 'end slider preview'
      },
      {
        url: 'https://i.imgur.com/wtAWMV2.png',
        alt: 'search city preview'
      },
    ],
  },
];
  
  export default projectsDetails;