import React, { useState } from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CryptoContext } from '../Context'

function Header() {

    const navigate = useNavigate();

    // const[currency,setCurrency] = useState("INR");

    const { currency, setCurrency } = useContext(CryptoContext);
    console.log(currency.cur)
    console.log(currency.sym)

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 nav-div">
                    <span className="logo" onClick={()=>navigate('/')} >Coin Hunt</span>
                    <select className="form" value={currency.cur} onChange={(e)=>setCurrency({...currency,cur:e.target.value})}>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header
