import React, { useState, useEffect } from "react";
import "./NewCollection.css";

import Item from "../Item/Item";
const NewCollection = () => {
  const url = "https://backend-eccomerce-oyd3.onrender.com"
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch(url + "/newcollection")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollection;
