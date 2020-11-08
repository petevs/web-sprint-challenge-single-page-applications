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
    <Route exact path="/" component={Home} />
    <Route path="/pizza" render={(props) => (
      <Pizza 
        pizzas={pizzas}
        addNewpizza={addNewPizza}
      />
        )} />
    </>
  );
};
export default App;
