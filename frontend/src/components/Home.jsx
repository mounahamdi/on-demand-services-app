import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const divstyle={
        textAlign: "center",
        align: "center",
    }
    const navigate = useNavigate()
    return (
    <div style={divstyle}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Welcome to our on-demand services application</h2>
        <br/>
        <p>On-demand services app allows you access to different types of services at home and getting workers for manual household repairs such as plumbing, electricity. Only with simple click</p>
        <br/>
        <br/>
        <br/>
        <Button style={{
        width: "40%",
        padding: "18px 20px",
        margin: "8px 0",
        fontWeight:"bold",
        fontFamily:"cursive",
        fontSize:"20px",
        color:"white"}} variant="success" onClick={()=>navigate("/search")}>Click to find a technician</Button>
    </div>
    )
}

export default Home;