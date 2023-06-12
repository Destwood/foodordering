import React from "react";
import style from "./Shop.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Shop() {
  return (
    <Link to="/cart" className={style.link}>
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  );
}

export default Shop;
