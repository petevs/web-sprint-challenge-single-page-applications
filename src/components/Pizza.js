import React from 'react'
import PizzaForm from './PizzaForm'
import Nav from './Nav'
import Hero from './Hero'

const Pizza = props => {
    return (
        <>
            <Nav />
            <Hero />
            <PizzaForm />
        </>
    )
}

export default Pizza