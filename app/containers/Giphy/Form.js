import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import H3 from 'components/H3'


const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color: #41addd;
  border:0;
  color:white;
  margin:1rem 1rem 0 0;

  &:active {
    background: #41addd;
    color: #fff;
  }

  &:disabled {
      background:grey;
      cursor:initial;
  }
`;

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <H3>Search Gifs with redux store parameters from redux-form</H3>
      <div>
        <label>Search Giphy</label>
        <div>
          <Field
            name="q"
            component="input"
            type="text"
            placeholder="Search Giphy"
          />
        </div>
      </div>
      <div>
        <label>Limit</label>
        <div>
        <Field name="limit" component="select">
            <option />
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Lang</label>
        <div>
        <Field name="lang" component="select">
            <option />
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="it">it</option>
          </Field>
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting} >
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'giphy' // a unique identifier for this form
})(SimpleForm)