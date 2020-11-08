import React from "react";
import { Route } from "react-router-dom"
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/pizza" component={Pizza} />
    </>
  );
};
export default App;
