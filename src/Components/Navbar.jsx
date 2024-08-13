import React, { useContext } from 'react'
import logo from '../assets/Logo.png'
import arrow from '../assets/arrow_icon.png'
import { NavLink,Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { Coincontext } from '../Context/Coincontext';


const Navbar = () => {
  const {setcurrency} = useContext(Coincontext);

  const currencyHandler = (e)=>{
      switch (e.target.value){
        case "usd":{
          setcurrency({name:"usd",Symbol: "$"})
          break;
        }
        case "eur":{
          setcurrency({name:"eur",Symbol: "€"})
          break;
        }
        case "inr":{
          setcurrency({name:"inr",Symbol: "₹"})
          break;
        }
        default :{
            setcurrency({name:"usd",Symbol: "$"})
            break;
        }
      }
  }
  return (
    <div className='font-pop flex items-center justify-between py-5 px-3 md:px-5 text-slate-100 shadow bg-violet-900'>
        <NavLink to='/'><img className='h-6 md:h-8 ' src={logo} alt="dfg" /></NavLink>
        <ul className='hidden md:flex md:gap-7 lg:gap-10 text-base font-medium lg:text-lg'>
           <Link to='/'><li>Home</li></Link>
            <li>Features</li>             
            <NavLink to='/pricing'><li className=''>Pricing</li></NavLink> 
            <li>Blog</li>
        </ul>
        <div className='flex items-center gap-2 md:gap-2 lg:gap-4'>
            <select onChange={currencyHandler} className='bg-indigo-950 px-2 py-1 md:px-3 md:py-[5px] md:text-base border-none rounded text-white outline-none text-sm' name="" id="">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button className='flex items-center bg-white rounded px-1 py-1 md:py-[7px] md:px-4 text-black text-sm'><span className='font-semibold md:text-base'>Sign up </span><GoArrowUpRight className='stroke-1 text-lg'/></button>
        </div>
    </div>
  )
}

export default Navbar