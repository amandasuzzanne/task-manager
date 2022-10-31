import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className='signup'>
        <Link to="/signup" style={{textDecoration: 'none', color:'black'}} className='reg-back'> <BiArrowBack size={'1.8em'}/> </Link>
        <h1 className='h1-signup'>Create Account</h1>
        <div className='signup-form'>
            <Form>
                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
            </Form>
        </div>
        <Button className="mt-5" variant="primary" type="submit" href="./login">Register</Button>

    </div>
  )
}

export default Signup