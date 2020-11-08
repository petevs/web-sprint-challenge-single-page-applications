import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom"
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {

  const [pizzas, setPizzas] = useState([]);

  const addNewPizza = (pizza) => {
    const newPizza = {
      name: pizza.name,
      size: pizza.size,
      pepperoni: pizza.pepperoni,
      sausage: pizza.sausage,
      onions: pizza.onions,
      specialInstructions: pizza.specialInstructions,
  }
    setPizzas([newPizza,...pizzas])
    console.log(pizza)
  }

  return (
    <>
    <Route exact path="/" render={(props) => (
      <Home pizzas={pizzas}
      />
    )}
    />
    <Route path="/pizza" render={(props) => (
      <Pizza 
        addNewpizza={addNewPizza}
      />
        )} />
    </>
  );
};
export default App;
