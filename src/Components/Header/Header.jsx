import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logo} from '../../assets/index'
import { allItems } from '../../Constants';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showAll, setShowAll] = useState(false)
    const products = useSelector((state)=>state.amazon.products)
    console.log(products);
  return (
    <div className='w-full sticky top-0 z-50'>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-1'>
            <Link to='/'>
                <div className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="" />
                    <span className='mb-1 text-sm'>.in</span>
                </div>
            </Link>

            <div className='hidden mdl:inline-flex headerHover'>
                <LocationOnOutlinedIcon className='mt-3'/>
                <p className='text-[10px] text-lightText font-light flex flex-col'>Delivering to Bengaluru<span className='font-bold text-[15px]'>Update location</span> </p>
            </div>

            <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
                <span onClick={()=> setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>All <span></span><ArrowDropDownOutlinedIcon/></span>
                { showAll && (
                    <div>
                        <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50'>
                        
                            {allItems.map((item)=>(
                                <li className='text-[0.8rem] hover:bg-blue-500 hover:text-white cursor-pointer' key={item._id}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type="text" />
                <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                    <SearchIcon/>
                </span>
            </div>

            
            <Link to='/signin'>
            <div className='headerHover flex flex-col items-start justify-center'>
                <p className='text-sm mdl:text-xs text-white mdl:font-light'>Hello, sign in</p>
                <p className='text-sm font-bold mt-[-2px] hidden mdl:inline-flex'>Account & Lists <span><ArrowDropDownOutlinedIcon/></span></p>
            </div>
            </Link>

            <div className='hidden mdl:inline-flex headerHover flex-col items-start justify-center h-11'>
                <p className='text-xs font-light'>Returns</p>
                <p className='text-sm font-bold mt-[-2px]'>& Orders</p>
            </div>

            <Link to='/cart'>
                <div className='headerHover flex items-start justify-center relative'>
                    <ShoppingCartIcon className='scale-125 mt-1'/>
                    <p className='font-inherit text-sm font-semibold mt-3'>Cart <span className='absolute -top-1 left-6 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center '>
                        {products.length > 0? products.length : 0}
                        </span></p>
                </div>
            </Link>
        </div>
        <HeaderBottom/>
    </div>
  )
}

export default Header