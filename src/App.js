import "./styles.css";
import React, { useState } from "react";

var smartphones = [
  {
    name: "Apple",
    rating: "Rating: 5/5",
    descr: "Best To Buy"
  },
  {
    name: "Mi",
    rating: "Rating: 3/5",
    descr: "Value For Money"
  },
  {
    name: "One Plus",
    rating: "Rating: 4/5",
    descr: "Camera Quality And Performance Best"
  }
];
var earphones = [
  {
    name: "Noise",
    rating: "Rating: 4/5",
    descr: "Best To Buy"
  },
  {
    name: "JBL",
    rating: "Rating: 5/5",
    descr: "Bass Quality at it's Best"
  },
  {
    name: "Boat",
    rating: "Rating: 3.5/5",
    descr: "value for money"
  }
];
var airconditionar = [
  {
    name: "Samsung",
    rating: "Rating: 4/5",
    descr: "Best To Buy"
  },
  {
    name: "L.G",
    rating: "Rating: 3/5",
    descr: "Quality at it's Best"
  },
  {
    name: "Blue-star",
    rating: "Rating: 3.5/5",
    descr: "value for money"
  }
];

export default function App() {
  var [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <section>
        <h1 style={{ fontSize: "30px" }}>🤖Electronic Products</h1>
        <p style={{ fontSize: "small" }}>
          Checkout the best product under category listed
        </p>
        <hr></hr>
      </section>
      <button onClick={() => setActiveIndex(0)}>Smart Phones</button>
      <button onClick={() => setActiveIndex(1)}>Earphones</button>
      <button onClick={() => setActiveIndex(2)}>Air Conditioner</button>
      <div className="listed">
        <ul>
          <li>
            {activeIndex === 0 &&
              smartphones.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
          <li>
            {activeIndex === 1 &&
              earphones.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
          <li>
            {activeIndex === 2 &&
              airconditionar.map((item) => (
                <li>
                  <p id="brand">{item.name}</p>
                  <p>{item.rating}</p>
                  <p>{item.descr}</p>
                </li>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
