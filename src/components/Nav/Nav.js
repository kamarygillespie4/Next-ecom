import Link from "next/link";
import { useEffect, useState } from "react";

import { AiFillShopping } from "react-icons/ai";

import Container from "../Container";

import styles from "./Nav.module.css";
const customStyles = {
  logo: {
    //height: "8%",
    padding: "1%",
    margin: "1%",
  },
};

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });

  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        {/* <p className={styles.title}>
          <Link href="/">SHOP</Link>
        </p> */}
        <p className={styles.title}>
          <Link href="/">
            OUT OF PLACE
            {/* <img
              style={customStyles.logo}
              src="https://res.cloudinary.com/dyck5r0tx/image/upload/v1675099367/Out%20Of%20Place/Webp.net-gifmaker_fessbv.gif"
              alt="OOP Logo"
            /> */}
          </Link>
        </p>
        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <AiFillShopping />
            <strong className="sr-only">Cart</strong>
          </a>
        </p>
      </Container>
    </nav>
  );
};

export default Nav;
