import React, { useContext, useEffect, useState } from 'react'
import { Coincontext } from '../Context/Coincontext'
import { Link } from 'react-router-dom';

const Home = () => {
  const { allcoin, currency } = useContext(Coincontext);
  const [displaycoin, setdisplaycoin] = useState([]);
  const [input ,setinput] =useState('');
  const inputHandler=(e)=>{
      setinput(e.target.value);
      if(e.target.value ===""){
        setdisplaycoin(allcoin)
      }
  }
  const searchHandler = async(e)=>{
    e.preventDefault();
    const coins = await allcoin.filter((item)=>{
      return  item.name.toLowerCase().includes(input.toLowerCase())
    })
    setdisplaycoin(coins)
  }

  useEffect(() => {
    setdisplaycoin(allcoin);
  }, [allcoin])
  return (
    <div className='text-white px-3 pt-6 pb-12 md:pt-10 '>
      <div className='flex flex-col items-center text-center gap-3'>
        <h1 className=' text-2xl lg:text-5xl font-bold '>Largest <br />Crypto Marketplace</h1>
        <p className='text-slate-200 text-sm md:text-lg'>Welcome to the world's largest cryptocurrency marketplace. sign upp to explore<br />more about cryptos.</p>
        <div className='px-2 py-1 bg-white rounded'>
          <form onSubmit={searchHandler}>
            <input onChange={inputHandler} className=' py-1 mr-1 px-2 w-[62vw] md:w-[40vw] lg:w-[31vw] lg:py-2 outline-none text-black' type="text" placeholder='search Crypto...' required value={input} />
            <button className='bg-gradient-to-r from-blue-600 to-violet-600 font-medium px-3 py-[6px] md:px-6 lg:px-7 rounded-sm' type='submit'>Search</button>
          </form>
        </div>
      </div>
      <div className='my-8 px-1 rounded bg-red-400 max-w-[900px] mx-auto bg-gradient-to-r from-blue-800 to-indigo-900  '>
        <div className='grid grid-cols-12 font-medium text-base p-2 md:py-3 gap-1 shadow border-b border-slate-500 w-full md:text-lg '>
          <p className='col-span-1 md:col-span-1'>#</p>
          <p className='col-span-5 md:col-span-3'>Coins</p>
          <p className='col-span-4 md:col-span-3'>Price</p>
          <p className='col-span-2 md:col-span-2'>24H</p>
          <p className='hidden md:block md:col-span-3 md:text-right'>Market Cap</p>
        </div>
        {displaycoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className='grid grid-cols-12 text-sm font-medium p-2 md:font-medium gap-1 shadow border-b border-slate-500 w-full md:text-base text-slate-200' key={index}>
            <p className='col-span-1 md:col-span-1'>{item.market_cap_rank}</p>
            <div className='flex col-span-5 md:col-span-3'><img className='h-6 w-6 md:h-9 md:w-9 mr-2' src={item.image} alt="" /><p>{item.name}</p></div>
            <p className='col-span-4 md:col-span-3'>{currency.Symbol}{item.current_price}</p>
            <p className={`col-span-2 md:col-span-3 ${Math.floor(item.price_change_percentage_24h*100)/100 > 0 ? 'text-green-400' :'text-red-400'}`}>{Math.floor(item.price_change_percentage_24h*100)/100 }</p>
            <p className='hidden md:block md:col-span-2 md:text-right'>{item.market_cap}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home