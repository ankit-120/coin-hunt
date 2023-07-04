import React, { createContext, useEffect, useState } from 'react'

export const CryptoContext = createContext();

const Context = ({children}) => {

    const [currency,setCurrency] = useState("INR");
    console.log("contexy : ",currency)
    const [symbol,setSymbol] = useState("₹");

    useEffect(()=>{
        if(currency === 'INR') setSymbol('₹');
        else if(currency === 'USD') setSymbol('$');
    },[currency]);

  return (
    <CryptoContext.Provider value={{currency,symbol,setCurrency}}>
        {children}
    </CryptoContext.Provider>
  )
};

export default Context;



