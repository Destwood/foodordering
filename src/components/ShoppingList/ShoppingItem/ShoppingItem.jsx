import React from "react";
import style from "./ShoppingItem.module.css";

function ShoppingItem({ currentGoods, onSelectItem }) {
  return (
    <div className={style.Goods}>
      <img src={currentGoods.pic} alt="Food pic" className={style.GoodImg} />
      <div className={style.goodContent}>
        <div className={style.goodInfo}>
          <h2 className={style.foodTitle}>{currentGoods.name}</h2>
          <p className={style.foodPrice}>{currentGoods.price} UAH</p>
        </div>

        <button
          className={style.Add}
          onClick={() => {
            onSelectItem(currentGoods);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;
