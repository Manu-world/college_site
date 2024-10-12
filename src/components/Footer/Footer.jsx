import "./Footer.css";
import logo from "../../assets/gmmco.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer">
        <div className="footer-container">
          <div className="footer-section about-college">
            <img src={logo} alt="College Logo" className="logo" />
            <p>
              We are dedicated to providing quality education and empowering
              students with the knowledge and skills needed for a bright future.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>

              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          {/* Vision:  To be a world class institution that provides holistic education.
Adress: P.O Box 1,
Sekyere-Beposo, Ashanti
Email: gmmcoebeposo@gmail.com 
Programs:B.Ed Early Grade Education 
B.Ed Upper Primary Education 
B.Ed JHS Education (Arabic & English Specialiation) */}
          <div className="footer-section" id="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <strong>Address:</strong> P.O Box 1, Sekyere-Beposo, Ashanti
              </li>
              <li>
                <strong>Email:</strong> gmmcoebeposo@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +233 243236539
              </li>
            </ul>
          </div>

          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Ghana Muslim Mission College of
            Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
