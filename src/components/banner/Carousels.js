import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { TrendingCoins } from '../../Api'
import { CryptoContext } from '../../Context'

function Carousels() {

    const[trending,setTrending] = useState([]);

    console.log(trending)

    const {currency} = useContext(CryptoContext)

    const fetchTrendingCoins = async() =>{
        const {data} = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }

    useEffect(()=>{
        fetchTrendingCoins();
    },[currency])

  return (
    <div>
      carousels
    </div>
  )
}

export default Carousels
