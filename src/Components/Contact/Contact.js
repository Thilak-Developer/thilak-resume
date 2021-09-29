

import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import '../../Shared/js/change'

function Contact() {
    return (
        <div>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div class="row mt-1">

                        

                        <div class="col-lg-4">
                            <div class="info">
                                <div class="address">
                                <i class='bx bx-current-location'></i>
                                    <h4>Location:</h4>
                                    <p>2-28 , Gandhi Nagar , Pappampadi , Dharmapuri .</p>
                                </div>

                                <div class="email">
                                <i class='bx bx-mail-send' ></i>
                                    <h4>Email:</h4>
                                    <p>thisisthilakraj@outlook.com</p>
                                </div>

                                <div class="phone">
                                <i class='bx bx-phone-call' ></i>
                                    <h4>Call:</h4>
                                    <p>+91-7402517025</p>
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-8 mt-5 mt-lg-0">
                       
                            <form action="https://formspree.io/f/xgeryldw" method="POST"  >
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <p></p>

                                <div class="text-center"><button type="submit" class="btn btn-outline-primary" onclick="change()" id="sendmsg">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>

        </div>

    );
}

export default Contact;
