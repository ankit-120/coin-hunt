import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './banner/Carousels';
import { CryptoContext } from '../Context';

function TableRow(props) {

    const navigate = useNavigate();
    const { id, image, name, symbol, price, perChange, marketCap } = props;
    const { currency } = useContext(CryptoContext)
    let profit = perChange > 0;

    return (
        <>
            <tr onClick={() => navigate(`/coin/${id}`)}
                key={name}>

                {/* {column 1} */}

                <td className='table-col1'>
                    <img className='coin-img' src={image}
                        alt={name}
                        height="50" />
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "5px"
                    }}>
                        <span
                            style={{
                                textTransform: "uppercase",
                                fontSize: 20,
                                color: "white"
                            }}>
                            {symbol}
                        </span>
                        <span
                            style={{
                                color: "darkgray"
                            }}>
                            {name}
                        </span>
                    </div>
                </td>

                {/* column2 */}

                <td className='table-col2' style={{
                    textAlign: "right"
                }}>
                    {currency.symbol}
                    {numberWithCommas(price.toFixed(2))}
                </td>

                {/* column3 */}

                <td className='table-col3' style={{
                    textAlign: "right",
                    color: profit ? "green" : "red",
                }}>
                    {profit && "+"}
                    {perChange.toFixed(2)}%
                </td>

                {/* column3 */}
                <td className='table-col2' style={{
                    textAlign: "right"
                }}>
                    {currency.symbol}
                    {numberWithCommas(marketCap.toString().slice(0, -6))}M
                </td>
            </tr>
        </>
    )
}

export default TableRow
