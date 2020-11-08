import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Hero = props => {

    return (
        <HeroBox>
            <h1>Your Favorite Food, Delivered While Coding</h1>
            <Btn to='/pizza'>Pizza?</Btn>
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

const Btn = styled(Link)`
    padding: 1rem;
    border-radius: 6px;
    background: black;
    color: white;
    text-decoration: none;
`

export default Hero