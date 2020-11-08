import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../index.css'

const Nav = props => {

    return (
        <NavBar>
            <Logo to='/'>Lambda Eats</Logo>
            <div>
                <Link to='/pizza'>Order Pizza</Link>
            </div>
        </NavBar>
    )
}

export default Nav

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
`

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    color: inherit;
`