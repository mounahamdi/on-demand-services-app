import React from 'react';

const Technician = ({ result }) => {
    return (
        <>
            <tr>
                <th>{ }</th>
                <th>{result.service}</th>
                <th>{result.city}</th>
                <th>{result.userName}</th>
                <th>{result.phone}</th>
            </tr>
        </>
    )
}

export default Technician;