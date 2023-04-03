import React from 'react';
import {Table} from 'react-bootstrap';
import Technician from './Technician.jsx'

const Technicians = ({ searchResult }) => {
    return (
        <div>
        <Table striped>
          <thead>
            <tr style={{color:"green"}}>
              <th>#</th>
              <th>Service</th>
              <th>City</th>
              <th>Technician</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
                    {searchResult.map(result => <Technician result={result} />)}
                </tbody>
            </Table>
        </div>
    )
}

export default Technicians;