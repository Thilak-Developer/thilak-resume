
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';



function Hero() {

  return (
    <div>
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          
          <h1>Thilak Raj </h1>

          <p class="typed">&nbsp; I'm  <Typed
            strings={[
              'Designer',
              'Developer']}
            typeSpeed={40}
            backSpeed={50}
            loop >

          </Typed></p>

          {/* <div class="social-links">
            <a href="https://twitter.com/TweetsByThilak" class="twitter" target="_blank" rel="noopener noreferrer" ><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/Thilak-Developer" class="github" target="_blank" rel="noopener noreferrer" ><i class="bx bxl-github"></i></a>
            <a href="https://www.instagram.com/thilakraj17/" class="instagram" target="_blank" rel="noopener noreferrer" ><i class="bx bxl-instagram"></i></a>
            <a href="https://join.skype.com/invite/yOcwYvAnLgll" class="google-plus" target="_blank" rel="noopener noreferrer" ><i class="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com/in/thilakraj17/" class="linkedin" target="_blank" rel="noopener noreferrer" ><i class="bx bxl-linkedin"></i></a>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Hero;
