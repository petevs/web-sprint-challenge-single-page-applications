import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Home =  props => {

    return (
        <>
            <Nav />
            <Hero />
            <div>
                <h1>This is the home component</h1>
            </div>
        </>
    )
}

export default Home