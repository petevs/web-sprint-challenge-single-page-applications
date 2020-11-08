import React from 'react'
import styled from 'styled-components'

const PizzaForm = props => {

    return (
        <FormWrapper>
            <h2>Build Your Own Pizza</h2>
            <FormBox>
                <label htmlFor='size'>Choice of size</label>
                <select>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra-Large</option>
                </select>
                <div>
                <h4>Choose Sauces</h4>

                <label>
                    Original Red
                    <input type='radio' name='original' checked='radio' />
                </label>
                <label>
                    Garlic Ranch
                    <input type='radio' name='garlicRanch' checked='radio' />
                </label>

                <label>
                    BBQ Sauce
                    <input type='radio' name='bbqSauce' checked='radio' />
                </label>

                <label>
                    Spinach Alfredo
                    <input type='radio' name='spinachAlfredo' checked='radio' />
                </label>

                </div>

                <div>
                    <h4>Toppings</h4>

                    <label>Pepperoni
                        <input type='checkbox' name='pepperoni' />
                    </label>

                </div>

                <button>Add Pizza</button>
            </FormBox>
        </FormWrapper>
    )
}

export default PizzaForm


const FormWrapper = styled.div`
    display: grid;
    justify-items: center;
`

const FormBox = styled.form`
    display: grid;
    max-width: 300px;
    grid-template-columns: 1fr;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 1rem;
`