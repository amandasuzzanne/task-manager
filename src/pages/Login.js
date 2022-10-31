import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import {Link} from "react-router-dom";

const Login = ({submit}) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submit(values)
    }

  return (
    <div className='login'>
        <h1 className='h1-login'>Task Manager</h1>
        <div>
            <form action="" method="post" onSubmit={handleSubmit}></form>
        </div>
        <div className='login-form'>
            <Form>
                <Form.Group className="mb-4" controlId="formBasicText">
                    <Form.Control type="text" placeholder="Username" id="username" onChange={handleChange} value={values.username}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} value={values.password}/>
                </Form.Group>
            </Form>
        </div>
        <Button className="mt-3 mb-5" variant="primary" type="submit" href="/">LOG IN</Button>

        <Link to="/signup" style={{textDecoration: 'none', color:'black'}}> DON'T HAVE AN ACCOUNT? </Link>

    </div>
  )
}

export default Login