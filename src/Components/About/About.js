

import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import Pic from '../../Assets/img/File_000.jpeg';

function About() {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>About</h2>
            <p> Full Stack MERN Developer. Adept at end to end software design & development including requirement gathering,
              documentation, infrastructure setup, coding & unit & integration testing. Handles complex project management & coordination work
              very efficiently to deliver results.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src={Pic} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>UI/UX Designer &amp; Web Developer.</h3>
              <p class="fst-italic">
                I design and bulid user interfaces . I enjoy creating beautifully designed, intuitive and functional websites.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>17 November 1998</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-7402517025</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>TamilNadu , India</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.E in Computer Science</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>thisisthilakraj@outlook.com</span></li>
                  </ul>
                </div>
              </div>
              <p>
                Web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019</p>
            </div>
          </div>

        </div>
      </section>
  

    </div>

  );
}

export default About;
