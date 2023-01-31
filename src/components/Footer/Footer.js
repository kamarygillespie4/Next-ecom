import Container from "../Container";
import { AiOutlineInstagram } from "react-icons/ai";

import styles from "./Footer.module.css";
const customStyles = {
  instagram: {
    height: "20rem",
  },
};

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <a
          href="https://www.instagram.com/outofplacestreetwear/?hl=en"
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
      </Container>
      <Container className={styles.footerContainer}>
        &copy; 2021, OUT OF PLACE, Denver Colorado
      </Container>
    </footer>
  );
};

export default Footer;
