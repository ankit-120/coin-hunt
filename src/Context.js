import React, { createContext, useEffect, useState } from 'react'

export const CryptoContext = createContext();

const Context = ({children}) => {

    // const [currency,setCurrency] = useState("INR");
    // console.log("contexy : ",currency)
    // const [symbol,setSymbol] = useState("₹");
    const [currency,setCurrency] = useState({
      cur : "INR",
      sym : "₹"
    })

    useEffect(()=>{
        if(currency.cur === 'INR') setCurrency({...currency,sym:"₹"});
        else if(currency.cur === 'USD') setCurrency({...currency,sym:"$"});
        // console.log("inside useEffect : ",currency)
    },[currency.cur]);

  return (
    <CryptoContext.Provider value={{currency,setCurrency}}>
        {children}
    </CryptoContext.Provider>
  )
};

export default Context;



