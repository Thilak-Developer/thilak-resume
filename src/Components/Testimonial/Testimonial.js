

import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonial.css';
import Pic1 from '../../Assets/img/testimonials/FreeCodeCamp - Responsive Web Design.jpeg';
import Pic3 from '../../Assets/img/testimonials/IBM-Chatbox.png';
import Pic4 from '../../Assets/img/testimonials/Problem Solving Basic - HackerRank.png';
// import Logo1 from '../../Assets/img/testimonials/Logo/5847f91ccef1014c0b5e48b8.png';
// import Logo2 from '../../Assets/img/testimonials/Logo/icons8-google-96.png';
// import Logo3 from '../../Assets/img/testimonials/Logo/icons8-ibm-96.png';
// import Logo4 from '../../Assets/img/testimonials/Logo/icons8-hackerrank-96.png';



import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: Pic1,
        caption: 'Slide 1'
    },
    {
        url: Pic4,
        caption: 'Slide 2'
    },
    {
        url: Pic3,
        caption: 'Slide 3'
    },
];





function Testimonial() {
    return (
        <div>
            <section id="testimonials" class="testimonials section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Certifications</h2>
                    </div>

                    <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">
                            {/* <Carousel>
                <div>
                <img src={Pic1} alt="" class="carouselimg"/>
                </div>
                <div>
                <img src={Pic2} alt="" class="carouselimg"/>
                </div>
                <div>
                <img src={Pic3} alt="" class="carouselimg"/>
                </div>
                </Carousel> */}
                            <div className="slide-container">
                                <Slide>
                                    {slideImages.map((slideImage, index) => (
                                        <div className="each-slide" key={index}>
                                            <div  >
                                            <img class="slideimgg" src={slideImage.url} alt="" />
                                                
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
