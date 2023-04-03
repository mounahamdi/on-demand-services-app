import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Technicians from './Technicians.jsx'

const Search = ({searchResult,searchedTechnicians}) => {
    const [city, setCity] = useState("")
    const [service, setService] = useState("")
    const divStyle = {
        marginTop:"50px"
    }
    const inputStyle = {
        width: "35%",
        padding: "8px 18px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box"
    }

    return (
        <div style={divStyle}>
            <br />
            <label>City: </label> <select style={inputStyle} onChange={(e) => setCity(e.target.value)}>
                <option value="none" selected>Open to choose the city</option>
                <option value="Ariana">Ariana</option>
                <option value="Béja">Béja</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Gabès">Gabès</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kebili">Kebili</option>
                <option value="Kef">Kef</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Manouba">Manouba</option>
                <option value="Medenine">Medenine</option>
                <option value="Monastir">Monastir</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Sfax">Sfax</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Tunis">Tunis</option>
                <option value="Zaghouan">Zaghouan</option>
            </select>
            <label>Service: </label> <select style={inputStyle} onChange={(e) => setService(e.target.value)}>
                <option value="none" selected>Open to choose the service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electricity">Electricity</option>
                <option value="Wifi repair and installation">Wifi repair and installation</option>
                <option value="Gardening">Gardening</option>
            </select>
            <Button variant="success" onClick={()=>searchedTechnicians(city,service)}>Search</Button>
            <br />
            <br />
            <br />
            <br />
            {searchResult.length!==0?<Technicians searchResult={searchResult}/>:""}
        </div>
    )
}

export default Search;