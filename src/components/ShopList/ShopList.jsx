import React from "react";
import style from "./ShopList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ShopList({ ShopList, onSelectShop }) {
  return (
    <div>
      <header>
        <FontAwesomeIcon icon={faCartShopping} />
        Order your food
      </header>

      <div className={style.ShopsContent}>
        {ShopList.map((shop, index) => (
          <button
            key={index}
            onClick={() => onSelectShop(shop)}
            className={style.ShopItem}
            style={{
              backgroundImage: `url(${shop.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className={style.ShopTitle}>{shop.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShopList;
