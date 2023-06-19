import React, { useState } from "react";
import style from "./ShoppingList.module.css";
import { Link } from "react-router-dom";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
function printItems(prop, type) {
  const items = type === "food" ? prop.food : prop.drinks;

  if (typeof items === "undefined") {
    return [];
  }

  return items;
}

function ShoppingList({ ShopList, selectedItem, linkTo }) {
  const [cartItems, setCartItems] = useState([]);

  const handlePrintItems = (type) => {
    const items = printItems(ShopList, type);
    setCartItems(items);
  };

  return (
    <div className={style.ShoppingItemsWrapper}>
      <div className={style.CartContent}>
        {/* Header */}
        <div className={style.CartHeader}>
          <button
            onClick={() => handlePrintItems("food")}
            className={`${style.FoodOption} ${style.btn}`}
          >
            food
          </button>
          <button
            onClick={() => handlePrintItems("drinks")}
            className={`${style.FoodOption} ${style.btn}`}
          >
            drinks
          </button>
        </div>
        {/* Header end */}

        {/* ItemsList */}
        <div className={style.CartMain}>
          {cartItems.map((currentItem, index) => (
            <ShoppingItem
              currentGoods={currentItem}
              onSelectItem={selectedItem}
            />
          ))}
        </div>
        {/* ItemsList end */}
      </div>
    </div>
  );
}

export default ShoppingList;
