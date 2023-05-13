import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './header';
import FirstGallery from './firstGallery';
import Video from './video';
import Article from './article';
import Gallery from './gallery';
import LearnMore from './cardsLearnMore';
import Footer from './footer';


const header= ReactDOM.createRoot(document.querySelector('header'));
header.render(
  <>
    <Header />
  </>
);
const firstGallery= ReactDOM.createRoot(document.querySelector('firstGallery'));
firstGallery.render(
  <>
  <FirstGallery />
  </>
);
const article= ReactDOM.createRoot(document.querySelector('article'));
article.render(
  <>
  <Article />
  </>
);

const gallery= ReactDOM.createRoot(document.querySelector('gallery'));
gallery.render(
  <>
  <Gallery />
  </>
);

const video= ReactDOM.createRoot(document.querySelector('vidos'));
video.render(
  <>
    <Video />
  </>
);

const cards= ReactDOM.createRoot(document.querySelector('learnMoreCards'));
cards.render(
  <>
    <LearnMore />
  </>
);

const footer= ReactDOM.createRoot(document.querySelector('footer'));
footer.render(
  <>
    <Footer/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
