import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function ManageProjects() {
  return (
    <div>
        <div className='manage'>
        <h1>MANAGE PROJECTS</h1>
            <div className='manageprojects-table'> 
            <h4>All Projects</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Tasks</th>
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
                            <td><Button variant='light' href="#" size="sm">Tasks</Button></td>
                            <td><Button variant='light' href="#" size="sm">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>02-06-2022</td>
                            <td>05-06-2022</td>
                            <td>Completed</td>
                            <td><Button variant='light' href="#" size="sm">Edit</Button></td>
                            <td><Button variant='light' href="#" size="sm">Tasks</Button></td>
                            <td><Button variant='light' href="#" size="sm">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='addproject-button'>
            <Button variant='primary' href="#">NEW PROJECT</Button>
            </div>
        </div>
    </div>
  )
}

export default ManageProjects