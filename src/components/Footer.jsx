import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
 const Footer = () => {
  return (
    <>
      <footer className="footer"> {/* Assigning the class "footer" to utilize the styles from the CSS file */}
      
        <div className="footer-socials"> 

          {/* Social media links */}
          <a href="https://www.instagram.com/"><FaSquareInstagram size={40} color="#E1306C" /></a>
          <a href="https://www.facebook.com/"><FaFacebookSquare size={40} color="blue"/></a>
        </div>
        <p>contact us</p> {/* Adding a copyright notice */}
        <p>about {/* Adding a note about the development tools used */}</p>
        <p>privacy policy</p> {/* Adding a copyright notice */}
        <p>terms of use {/* Adding a note about the development tools used */}</p>
        
      </footer>
    </>
  );

};
export default Footer;