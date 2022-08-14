import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/esm/Button'

const UserForm = props => {
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <label className='form-label'>Name</label>
            <input className='form-control' type="txt" name="username" id="name" onChange={handleChange}  required />
            <label className='form-label'>Email</label>
            <input className='form-control' type="txt" name="email" id="email" onChange={handleChange}  required /> 
            <Button variant='primary' type="submit" style={{marginTop: "20px"}}>Save</Button>
        </form>        
    </div>
  )
}

UserForm.propTypes = {}

