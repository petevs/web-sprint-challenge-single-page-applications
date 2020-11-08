import React from 'react'
import styled from 'styled-components'

const Nav = props => {

    return (
        <NavBar>
            <h2>Lambda Eats</h2>
            <div>
                <button>Home</button>
                <button>Help</button>
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