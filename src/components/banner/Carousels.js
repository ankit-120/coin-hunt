import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoins } from '../../Api'
import { CryptoContext } from '../../Context'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import './Carousels.js'

function Carousels() {

    const[trending,setTrending] = useState([]);

    const {currency} = useContext(CryptoContext)

    const fetchTrendingCoins = async() =>{
        const {data} = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }

    useEffect(()=>{
        fetchTrendingCoins();
        
    },[currency])

    console.log(trending)

    const responsive={
      0:{
        items : 2
      },
      512:{
        items : 4
      }
    };

    const items=trending.map((coin) => {
      return(
        <Link to={`/coin/${coin.id}`}>
          <img src={coin.image} alt={coin.name} height="80" className="coin-img" />
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
