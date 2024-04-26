import { FaSquareInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <>
      <footer className="footer"> {/* Assigning the class "footer" to utilize the styles from the CSS file */}
      
        <div className="footer-socials"> 

          {/* Social media links */}
          <a href="https://www.instagram.com/"><FaSquareInstagram size={40} color="red" /></a>
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
        <p>&copy;צור קשר</p> {/* Adding a copyright notice */}
        <p>אודות {/* Adding a note about the development tools used */}</p>
      </footer>
    </>
  );
};