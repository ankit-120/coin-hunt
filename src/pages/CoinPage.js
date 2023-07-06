import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoContext } from '../Context';
import axios from 'axios';
import { SingleCoin } from '../Api';
import CoinInfo from '../components/CoinInfo';
import './CoinPage.css'
import { Spinner } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas } from '../components/banner/Carousels';

function CoinPage() {

  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency } = useContext(CryptoContext);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  useEffect(() => {
    fetchCoin();
  },[])

  console.log(coin);

  if (!coin) {
    return( 
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems : "center",
      height: "100vh"
    }}>
      <Spinner animation="border" style={{
        width: "200px",
        height: "200px"
      }} />
    </div>
  )}

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 sidebar mt-5">
            <div className="col-12 img-name-div">
              <img src={coin.image.large}
                alt={coin.name}
                height="200" />
              <span className='name-div'>{coin.name}</span>
              <div className='desc-div'>
                {ReactHtmlParser(coin.description.en.split(". ")[0])}.
              </div>
              <div>
                <div className='info'>Rank:&nbsp;&nbsp;
                  <span className='info-value'>
                    {coin.market_cap_rank}
                  </span>
                </div>
                <div className='info'>Current Price:&nbsp;&nbsp;
                  <span className='info-value'>
                    {currency.symbol}
                    {numberWithCommas(coin.market_data.current_price[currency.code.toLowerCase()])}
                  </span>
                </div>
                <div className='info'>Market Cap:&nbsp;&nbsp;
                  <span className='info-value'>
                    {currency.symbol}
                    {numberWithCommas(coin.market_data.market_cap[currency.code.toLowerCase()].toString().slice(0,-6))}M
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <CoinInfo coin={coin} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinPage
