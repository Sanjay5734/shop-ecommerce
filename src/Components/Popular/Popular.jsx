import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

import "./Popular.css";
const Popular = () => {
  const url = "https://backend-eccomerce-oyd3.onrender.com"
  const [popularProducts, setpopularProduct] = useState([]);
  useEffect(() => {
    fetch(url + "/popularinwomen")
      .then((response) => response.json())
      .then((data) => setpopularProduct(data));
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
