import React from 'react'
import PizzaForm from './PizzaForm'
import Nav from './Nav'
import Hero from './Hero'

const Pizza = props => {

    const {addNewPizza, pizzas} = props


    return (
        <>
            <Nav />
            <Hero />
            <PizzaForm addNewPizza={addNewPizza} />
        </>
    )
}

export default Pizza