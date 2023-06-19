import React from "react";
import style from "./ShoppingCart.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart({ ShopList }) {
  // Функция для расчета общей суммы
  const calculateTotalPrice = () => {
    let sum = 0;
    ShopList.forEach((item) => {
      sum += item.item.price;
    });
    return sum;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className={style.Cart}>
      <div id="openModal" className={style.modal}>
        <div className={style.modalDialog}>
          <div className={style.modalContent}>
            <div className={style.modalHeader}>
              <h3 className={style.modalTitle}>Cart</h3>
              <a href="#close" title="Close" className={style.close}>
                Х
              </a>
            </div>
            <div className={style.modalBody}>
              {/* main content */}
              {ShopList.map((item, index) => (
                <div className={style.foodItem}>
                  <img
                    src={item.item.pic}
                    alt={item.item.name}
                    className={style.itemPic}
                  />
                  <div className={style.itemInfo}>
                    <div>{item.item.name}</div>
                    <div className={style.price}>{item.item.price} грн.</div>
                  </div>
                </div>
              ))}
              {/* main content end*/}
            </div>
            <div className={style.sumPrice}>
              {/* Отображение суммы */}
              <div className={style.total}>Total Price: {totalPrice} грн.</div>
            </div>
          </div>
        </div>
      </div>
      <a href="#openModal" className={style.btn}>
        <FontAwesomeIcon icon={faCartShopping} />
      </a>
    </div>
  );
}

export default ShoppingCart;
