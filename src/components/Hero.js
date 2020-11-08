import React from 'react'
import styled from 'styled-components'

const Hero = props => {

    return (
        <HeroBox>
            <h1>Your Favorite Food, Delivered While Coding</h1>
            <button>Pizza?</button>
        </HeroBox>


    )
}

const HeroBox = styled.div`
    min-height: 200px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    border-bottom: 1px solid #ccc;
    text-align: center;

`

export default Hero