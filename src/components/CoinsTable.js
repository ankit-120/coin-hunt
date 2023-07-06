import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../Context';
import axios from 'axios';
import { CoinList } from '../Api';
import './CoinsTable.css';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import TablePagination from './TablePagination';
import {Spinner} from 'react-bootstrap';

function CoinsTable() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState('false');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  console.log(page);

  const { currency } = useContext(CryptoContext);

  const fetchCoin = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency.code));
    setCoins(data);
    setLoading(false);
  };

  console.log(coins)

  useEffect(() => {
    fetchCoin();
  }, [currency])

  const handleSearch = () => {
    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className='text-center mt-3 mb-3'>
              Cryptocurrency Prices by Market Cap
            </div>
            <div>
              <input type="text"
                placeholder='Search Coin here'
                className='search-box'
                onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='table-div'>
              {
                loading ? (<Spinner animation="border" style={{
                  width: "200px",
                  height: "200px"
                }} />) :
                  (
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          {['Coin', 'Price', '24h Change', 'Market Cap'].map((head) => (

                            <th style={{
                              border: "none",
                              backgroundColor: "gold",
                              color: "black",
                              fontWeight: "800",
                              width: head === 'Coin' ? "40%" : "20%",
                              textAlign: head === 'Coin' ? "left" : "right"
                            }}
                              key={head}
                              text-align={head === 'Coin' ? "" : "right"}>{head}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                          return (
                            <TableRow id={row.id} image={row.image} name={row.name} symbol={row.symbol} price={row.current_price} perChange={row.price_change_percentage_24h} marketCap={row.market_cap} key={row.id} />
                          )
                        })}
                      </tbody>
                    </Table>
                  )
              }
            </div>
            <div className='m-5 '>
              {
                <TablePagination length={handleSearch().length / 10} setPage={setPage} page={page} />
              }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinsTable
