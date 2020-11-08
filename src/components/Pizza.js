import React from 'react'
import PizzaForm from './PizzaForm'
import Nav from './Nav'
import Hero from './Hero'

const Pizza = props => {

    const {addNewPizza} = props
    return (
        <>
            <Nav />
            <Hero />
            <PizzaForm addNewPizza={props} />
        </>
    )
}

export default Pizza