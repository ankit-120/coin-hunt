import React, { createContext, useState } from 'react'

export const CryptoContext = createContext();

const Context = ({children}) => {

    // const [currency,setCurrency] = useState("INR");
    // const [symbol,setSymbol] = useState("₹");
    // console.log(currency);

    const [currency,setCurrency] = useState({
      code : 'INR',
      symbol : '₹'
    })

    console.log(currency.code);
    console.log(currency.symbol);

    // useEffect(()=>{
    //     if(currency === 'INR') setSymbol("₹");
    //     else if(currency === 'USD') setSymbol("$");
    //     console.log("symbol updated");
    // },[currency]);

  return (
    <CryptoContext.Provider value={{currency,setCurrency}}>
        {children}
    </CryptoContext.Provider>
  )
};

export default Context;



