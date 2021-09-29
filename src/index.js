import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './Shared/js/main';
import './Shared/js/change';
import Hero from './Components/Hero/Hero';
// Import Swiper styles

ReactDOM.render(
  <React.StrictMode>
    <body>
    <App />
    <Hero />
    <About />
    <Skills />
    <Resume />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
