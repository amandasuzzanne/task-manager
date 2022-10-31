import React from 'react'
import Table from 'react-bootstrap/Table';

function Home() {
  return (
    <div className='home'>
    <h1>HOME</h1>
        <div className='home-table'> 
        <h4>Current Projects</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>02-06-2022</td>
                        <td>02-06-2022</td>                    
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className='home-table2'>
        <h4>Completed Projects</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>02-06-2022</td>
                        <td>02-06-2022</td>                    
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className='home-table3'>
        <h4>Suspended Projects</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>02-06-2022</td>
                        <td>02-06-2022</td>                    
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Home