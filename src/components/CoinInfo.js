import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../Context';
import axios from 'axios';
import { HistoricalChart } from '../Api';
import { Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { chartDays } from './ChartDays';
import './CoinInfo.css';
import SelectButton from './SelectButton';

function CoinInfo(props) {

  const { coin } = props;
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = useContext(CryptoContext);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency.code));
    setHistoricData(data.prices);
  }

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  if (!historicData) {
    return( 
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        height: "100vh"
      }}>
        <Spinner animation="border" style={{
          width: "150px",
          height: "150px"
        }} />
      </div>
    )
  }

  return (
    <div>
      <div className='m-lg-4'>
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time = date.getHours() > 12 ?
                `${date.getHours() - 12}:${date.getMinutes()}AM`
                : `${date.getHours()}:${date.getMinutes()}PM`

              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [{
              data: historicData.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in ${currency.code}`,
              borderColor: "gold"
            }]
          }}
          options={{
            elements: {
              point: {
                radius: 1
              }
            }
          }} />
      </div>
      <div className='buttons'>
          {chartDays.map((day)=>(
            <SelectButton
            key={day.value}
            onClick={()=>setDays(day.value)}
            selected={days===day.value}>{day.label}</SelectButton>
          ))}
      </div>
    </div>
  )
}

export default CoinInfo
