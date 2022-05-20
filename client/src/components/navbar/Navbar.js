import React from "react";
import PropTypes from "prop-types";
import navbarStyles from "../../css/navbar.module.css";

export default function Navbar(props) {
  const { logo } = props;
  return (
    <nav className={navbarStyles.navbar}>
      <h2 className={navbarStyles.logo}>{logo}</h2>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string,
};
