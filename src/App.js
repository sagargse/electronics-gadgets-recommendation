import "./styles.css";
import React, { useState } from "react";

var gadgets = {
  smartPhones: {
    model: ["Iphone(5/5)", "OnePlus(4.5/5)", "Mi(4/5)", "vivo(3/5)"]
  },
  earphones: {
    model: ["Apple(5/5)", "OnePlus(4/5)", "Mi(4.5/5)", "Boat(3/5)"]
  },
  AirConditioner: {
    model: ["Samsung(5/5)", "Hitachi(4.5/5)", "LG(3.5/5)", "Blue-star(2/5)"]
  },
  fridges: {
    model: ["Whirlpool(5/5)", "L.G(4/5)", "Samsung(3/5)", "Godrej(2/5)"]
  },
  washingMachine: {
    model: ["L.G(5/5)", "Whirlpool(4/5)", "samsung(3.5/5)", "Bosch(3/5)"]
  }
};

export default function App() {
  var [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <section>
        <h1 style={{ fontSize: "30px" }}>🤖 Electronic Products</h1>
        <p style={{ fontSize: "small" }}>
          Checkout the best product under category listed
        </p>
        <hr></hr>
      </section>
      <button onClick={() => setActiveIndex(0)}>Smart Phones</button>
      <button onClick={() => setActiveIndex(1)}>Earphones</button>
      <button onClick={() => setActiveIndex(2)}>Air Conditioner</button>
      <button onClick={() => setActiveIndex(3)}>Fridge</button>
      <button onClick={() => setActiveIndex(4)}>Washing Machine</button>
      <div className="listed">
        <ul>
          <li>
            {activeIndex === 0 &&
              gadgets.smartPhones.model.map((item) => <li>{item}</li>)}
          </li>
          <li>
            {activeIndex === 1 &&
              gadgets.earphones.model.map((item) => <li>{item}</li>)}
          </li>
          <li>
            {activeIndex === 2 &&
              gadgets.AirConditioner.model.map((item) => <li>{item}</li>)}
          </li>
          <li>
            {activeIndex === 3 &&
              gadgets.fridges.model.map((item) => <li>{item}</li>)}
          </li>
          <li>
            {activeIndex === 4 &&
              gadgets.washingMachine.model.map((item) => <li>{item}</li>)}
          </li>
        </ul>
      </div>
    </div>
  );
}
