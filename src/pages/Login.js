import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className='login'>
        <h1 className='h1-login'>Task Manager</h1>
        <div>
            <form action="" method="post">
                
            </form>
        </div>
        <div className='login-form'>
            <Form>
                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
        <Button className="mt-3 mb-5" variant="primary" type="submit" href="/">LOG IN</Button>

        <Link to="/signup" style={{textDecoration: 'none', color:'black'}}> DON'T HAVE AN ACCOUNT? </Link>

    </div>
  )
}

export default Login