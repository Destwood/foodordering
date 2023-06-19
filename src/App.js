import React, { useState } from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import Mac from "./img/Mac.jpg";
import MacFood from "./img/MacFood.png";
import KFC from "./img/KFC.png";
import KFCFood from "./img/KFCFood.png";
import Doner from "./img/doner.jpg";
import DonerFood from "./img/DonerFood.jpg";
import Shaurmishka from "./img/Shaurmishka.png";
import ShaurmishkaFood from "./img/ShaurmishkaFood.jpg";

const shopsList = [
  {
    name: "McDonald's",
    drinks: [
      { name: "Кола", price: 31, pic: MacFood },
      { name: "Фанта", price: 31, pic: MacFood },
    ],
    food: [
      { name: "Дабл чізбургер меню", price: 258, pic: MacFood },
      { name: "Біг тейсті меню", price: 251, pic: MacFood },
      { name: "Роял фреш меню", price: 235, pic: MacFood },
      { name: "Роял чізбургер меню", price: 204, pic: MacFood },
    ],
    pic: Mac,
  },
  {
    name: "KFC",
    drinks: [
      { name: "Пепсі-Кола", price: 50, pic: KFCFood },
      { name: "7 UP", price: 50, pic: KFCFood },
    ],
    food: [
      { name: "Боксмайстер фреш меню", price: 237, pic: KFCFood },
      { name: "Дабл чікен меню", price: 215, pic: KFCFood },
      { name: "Твістер меню", price: 203, pic: KFCFood },
      { name: "Кентуккi бургер меню", price: 198, pic: KFCFood },
    ],
    pic: KFC,
  },
  {
    name: "Shaurmishka",
    drinks: [
      { name: "Сік Сандора", price: 81, pic: ShaurmishkaFood },
      { name: "Лимонад", price: 47, pic: ShaurmishkaFood },
    ],
    food: [
      { name: "Шаурмішка з телятиною Мега", price: 189, pic: ShaurmishkaFood },
      { name: "Шаурмішка М'ясна", price: 179, pic: ShaurmishkaFood },
      { name: "Шаурмішка з куркою Мега", price: 175, pic: ShaurmishkaFood },
      {
        name: "Шаурмішка від шефа з телятиною",
        price: 169,
        pic: ShaurmishkaFood,
      },
    ],
    pic: Shaurmishka,
  },
  {
    name: "NUMO",
    drinks: [
      { name: "Айран", price: 52, pic: DonerFood },
      { name: "Coca-Cola", price: 29, pic: DonerFood },
    ],
    food: [
      { name: "Шаурма з телятиною", price: 126, pic: DonerFood },
      { name: "Шаурма з куркою", price: 116, pic: DonerFood },
      { name: "Дьонер у булці з куркою", price: 122, pic: DonerFood },
      {
        name: "Дьонер у булці з подвійною телятиною",
        price: 175,
        pic: DonerFood,
      },
    ],
    pic: Doner,
  },
];

function App() {
  const [basketList, setBasketList] = useState([]);

  const handleItemSelect = (item) => {
    console.log(item);

    const updatedBasketList = [...basketList, { item }];

    setBasketList(updatedBasketList);
    console.log(updatedBasketList);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <Shop avaiableShops={shopsList} newItem={handleItemSelect} />
        <ShoppingCart ShopList={basketList} />
      </div>
    </div>
  );
}

export default App;
