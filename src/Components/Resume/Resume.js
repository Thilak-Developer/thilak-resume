

import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

function Resume() {
  return (
    <div>
      <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Thilak</h4>
              <p><em>Innovative and deadline-driven developer with experience in designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>TamilNadu,India</li>
                <li>+91-7402517025</li>
                <li>thisisthilakraj@outlook.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Full Stack Mern development Course</h4>
              <h5>April 2021 - October 2021</h5>
              <p><em>SkillSafari</em></p>
            </div>
            <div class="resume-item">
              <h4>Bachelor Of Engineering In Computer Science</h4>
              <h5>2016 - 2020</h5>
              <p><em>Dhirajlal Gandhi College of Technology, Salem.</em></p>
              <p>With 7.1 GPA </p>
            </div>
            <div class="resume-item">
              <h4>HSC</h4>
              <h5>2015 - 2016</h5>
              <p><em>Indian Matriculation School , Harur.</em></p>
              <p>With 76%.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Back End Developer</h4>
              <h5>Jan 2021 - Present</h5>
              <p><em>Almatar(Airline Ticket & Hotel Booking Platform)</em></p>
              <ul>
                <li>Created Restful Api using nestjs with high level validations.</li>
                <li> As a contact point between the technical team, functional team and the test teams . </li>
                <li>Performed requirements analysis, design, development and test management of monthly 100 M/D releases .</li>
                <li>Contributed to each project delivery phase (analysis,development,test,ops) in different roles .</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>iOS Front End App development Intern</h4>
              <h5>Jan 2020 - April 2020</h5>
              <p><em>Howdy Ventures , Chennai</em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              </ul>
            </div>
           
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Resume;
