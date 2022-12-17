import React from "react";
import { Form } from "semantic-ui-react";
import { useEffect, useState } from 'react'

function PokemonForm() {

  const [ showForm, setShowForm ] = useState(false)
  const [ btnText, setBtnText ] = useState(true)

  const initialFormValues = {
    name:"",
    hp:"",
    sprites:{
      front:"",
      back:""
    }, 
  }

  const  [ formData, setFormData ] = useState({initialFormValues})

  const handleClickAction = () => {
    setShowForm(currentValue => !currentValue)
    setBtnText(currentValue => !currentValue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <button onClick={handleClickAction}  >{btnText ? "Add a Pokemon!": "Hide Form"}</button>
      {showForm ? <Form
        onSubmit={(e) => {
          handleSubmit()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            // value={formData.sprites.front}
            />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            // value={formData.sprites.back}
            />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form> : (
        <></>
      )}
    </div>
  );
}

export default PokemonForm;
