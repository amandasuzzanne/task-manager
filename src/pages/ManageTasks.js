import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function ManageTasks() {

  

  return (
    <div>
        <div className='manage'>
        <h1>MANAGE TASKS</h1>
            <div className='managetasks-table'> 
            <h4>All Tasks</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>02-06-2022</td>
                            <td>05-06-2022</td>
                            <td>Completed</td>
                            <td><Button variant='light' href="#" size="sm">Edit</Button></td>
                            <td><Button variant='light' href="#" size="sm">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>02-06-2022</td>
                            <td>05-06-2022</td>
                            <td>Completed</td>
                            <td><Button variant='light' href="#" size="sm">Edit</Button></td>
                            <td><Button variant='light' href="#" size="sm">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='addtask-button'>
            <Button variant='primary' href="./AddTasks.js">NEW TASK</Button>
            </div>
        </div>
    </div>
  )
}

export default ManageTasks