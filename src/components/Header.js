import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CryptoContext } from '../Context'

function Header() {

    const navigate = useNavigate();

    const { currency, setCurrency } = useContext(CryptoContext);
    console.log(currency)

    const handleCurrency = (e) =>{
        if(e.target.value === 'INR') setCurrency({...currency,code:'INR',symbol:'₹'})
        else setCurrency({...currency,code:'USD',symbol:'$'})
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 nav-div">
                    <span className="logo" onClick={()=>navigate('/')} >Coin Hunt</span>
                    <select className="form" value={currency.code} onChange={handleCurrency}>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header
