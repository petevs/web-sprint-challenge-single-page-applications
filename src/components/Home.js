import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Home =  props => {

    const {pizzas} = props;

    return (
        <>
            <Nav />
            <Hero />
            {pizzas.map(pizza => (
                <h3>pizza.name</h3>
            ))}
        </>
    )
}

export default Home