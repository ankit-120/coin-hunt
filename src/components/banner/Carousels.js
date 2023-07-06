import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoins } from '../../Api'
import { CryptoContext } from '../../Context'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import './Carousel.css'

export function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Carousels() {

  const [trending, setTrending] = useState([]);

  const { currency } = useContext(CryptoContext)

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency.code))
    setTrending(data);
  }

  useEffect(() => {
    fetchTrendingCoins();

  }, [currency])

  console.log(trending)

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  };

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link className="coin" to={`/coin/${coin.id}`}>
        <img src={coin.image} alt={coin.name} height="80"/>
        <div>
          <span>{coin.symbol}</span>
          &nbsp;&nbsp;
          <span 
          style={{
            color : profit>0?"green":"red"
          }}>
            {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <span className='coin-price'>
          {currency.symbol} {numberWithCommas(coin.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className='carousel'>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  )
}

export default Carousels
