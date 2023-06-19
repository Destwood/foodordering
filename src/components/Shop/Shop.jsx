import React, { useState } from "react";
import style from "./Shop.module.css";
import ShopList from "../ShopList/ShopList";
import ShoppingList from "../ShoppingList/ShoppingList";

function Shop({ avaiableShops, newItem }) {
  const [currentShop, setCurrentShop] = useState(null);
  const [basketList, setBasketList] = useState([]); // Добавил это

  const handleShopSelect = (shop) => {
    setCurrentShop(shop);
  };

  return (
    <div className={style.content}>
      <div className={style.conentColumn}>
        <ShopList ShopList={avaiableShops} onSelectShop={handleShopSelect} />
      </div>
      <div className={style.conentColumn}>
        <ShoppingList
          ShopList={currentShop}
          selectedItem={newItem}
          linkTo="Order"
        />
      </div>
    </div>
  );
}

export default Shop;
