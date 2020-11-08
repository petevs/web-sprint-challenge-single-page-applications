import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import * as yup from 'yup'
import formSchema from '../formSchema'

const PizzaForm = props => {

    const { addNewPizza } = props
    const [post, setPost] = useState([])
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const initialFormState = {
        name: '',
        size: '',
        pepperoni: '',
        sausage: '',
        onions: '',
        specialInstructions: '',
    }

    //Set servor error
    const [serverError, setServerError] = useState('')

    //Manage state for form inputs
    const [formState, setFormState] = useState(initialFormState)

    //managing state for errors
    const [errors, setErrors] = useState(initialFormState)

    //inline validation

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            //if valid then clear errors
            .then(valid => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                console.log("there is an error", err)
                setErrors({...errors, [e.target.name]: err.errors[0]})
            })
    }

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid)
        })
    },[formState])

    const inputChange = e => {
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e)
        setFormState(newFormData)
        console.log(newFormData)
    }

    //Submit Form

    const formSubmit = (event) => {
        event.preventDefault()

        Axios
            .post('https://reqres.in/api/users',formState)
            .then(response => {
                setPost(response.data)

                setFormState(initialFormState)

                setServerError(null)
                console.log(response.data)
            })
            .catch(err => {
                setServerError('There is a server error!')
            })
    }
    
    return (
        <FormWrapper>
            <h2>Build Your Own Pizza</h2>
            <FormBox onSubmit={formSubmit}>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    value={formState.name}
                    onChange={inputChange}
                ></input>

                <label htmlFor='size'>Choice of size</label>
                <select
                    id='size'
                    name='size'
                    value={formState.size}
                    onChange={inputChange}
                >
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra-Large'>Extra-Large</option>
                </select>
                <div>
                    <h4>Toppings</h4>

                    <label>Pepperoni
                        <input
                            id='pepperoni'
                            type='checkbox' name='pepperoni'
                            checked={formState.pepperoni}
                            onChange={inputChange} 
                        />
                    </label>

                    <label>Sausage
                        <input
                            id='sausage'
                            type='checkbox' name='sausage'
                            checked={formState.sausage}
                            onChange={inputChange} 
                        />
                    </label>

                    <label>Onions
                        <input
                            id='onions'
                            type='checkbox' name='onions'
                            checked={formState.onions}
                            onChange={inputChange} 
                        />
                    </label>

                </div>

                <label>Special Instructions</label>
                <input
                    id='specialInstructions'
                    name='specialInstructions'
                    onChange={inputChange}
                    value={formState.specialInstructions} 
                    type='text-area'
                    ></input>

                <button id="submit" type="submit" disabled={isButtonDisabled}>Add Pizza</button>
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