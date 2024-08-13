import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../Context/Coincontext';
import Linechart from '../Components/Linechart';

const Coin = () => {
  const { coinid } = useParams();
  const [coindata, setcoindata] = useState();
  const { currency } = useContext(Coincontext);
  const [historicalData, sethistoricalData] = useState();

  const fetchcoindata = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tLRv4tXoyfjyCc67auZXLzsr' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then(response => response.json())
      .then(response => setcoindata(response))
      .catch(err => console.error(err));

  }

  const fetchhistoricaldata = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-tLRv4tXoyfjyCc67auZXLzsr' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency}&days=10`, options)
      .then(response => response.json())
      .then(response => sethistoricalData(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchcoindata()
    fetchhistoricaldata()
  }, [currency])

  if (coindata, historicalData) {
    return (
      <div className='relative text-white py-9 flex flex-col items-center min-h-[82vh]'>
        <div >
          <img className='h-40' src={coindata.image.large} alt="" />
          <p className='mt-3 mb-7 text-center text-2xl'><b>{coindata.name} ({coindata.symbol.toUpperCase()})</b></p>
        </div>
        <div>
          {/* <Linechart historicalData={historicalData} /> */}
        </div>
        <div className='font-medium text-lg bg-blue-800 w-[60vw] px-2 rounded shadow-lg'>
          <ul className='flex justify-between border-b border-slate-500 py-2'>
            <li>Crypto Market Value </li>
            <li>{coindata.market_cap_rank}</li>
          </ul>
          <ul className='flex justify-between border-b border-slate-500 py-2'>
            <li>Current price </li>
            <li>{currency.Symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between border-b border-slate-500 py-2'>
            <li>Market Cap </li>
            <li className='text-green-400'>{currency.Symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between border-b border-slate-500 py-2'>
            <li>24 Hour High</li>
            <li className='text-green-400'>{currency.Symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul className='flex justify-between border-b border-slate-500 py-2'>
            <li>24 Hour Low</li>
            <li className='text-red-400'>{currency.Symbol} {coindata.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex-col gap-4 w-full mt-32 flex items-center justify-center">
        <div className="w-14 h-14 border-4 animate-spin border-gray-600 flex items-center justify-center border-t-slate-300 rounded-full">
        </div>
      </div>
    )
  }
}

export default Coin