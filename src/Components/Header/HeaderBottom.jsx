import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {motion} from "framer-motion"
import { useRef } from 'react';

const HeaderBottom = () => {
    const ref = useRef()
    const [sideBar, setSideBar] = useState(false)

    useEffect(()=>{
        document.body.addEventListener("click", (e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false)
            }
        })
    },[ref, sideBar])
    // console.log(sideBar);

  return (
    <div className='w-full px-4 bg-amazon_light h-9 flex text-white items-center'>
        <ul className='flex text-sm p-2 tracking-wide'>
            <li onClick={()=>setSideBar(true)} className='headerHover h-8 font-bold gap-1'> <MenuIcon/>All</li>
            <li className="headerHover h-8 hidden md:inline-flex">Amazon miniTV</li>
            <li className="headerHover h-8 hidden md:inline-flex">Sell</li>
            <li className="headerHover h-8 hidden md:inline-flex">Best Sellers</li>
            <li className="headerHover h-8 hidden md:inline-flex">Today's Deals</li>
            <li className="headerHover h-8 hidden md:inline-flex">Mobiles</li>
            <li className="headerHover h-8 hidden md:inline-flex">Customer Service</li>
            <li className="headerHover h-8 hidden md:inline-flex">Electronics</li>
            <li className="headerHover h-8 hidden md:inline-flex">New Releases</li>
            <li className="headerHover h-8 hidden md:inline-flex">Gift Ideas</li>
        </ul>

        {sideBar && (
            <div className='w-full h-screen text-black fixed top-0 left-0 bg-[#121212] bg-opacity-70'>
                <div className='w-full h-full relative'>
                <motion.div ref={ref} initial={{x:-500, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[70%] md:w-[350px] h-full bg-white border-black'>
                    <div className='w-full bg-amazon_light text-white py-3 px-6 flex items-center gap-2 text-lg font-semibold'>
                        <AccountCircleIcon/> Hello, sign in
                    </div>
                    <div className='flex flex-col overflow-hidden overflow-y-auto'>
                        {/* try to change it with map after completing the project */}
                        <SideNavContent 
                        title={"Trending"}
                        one={"Best Sellers"}
                        two={"New Releases"}
                        three={"Movers and Shakers"}/>

                        <SideNavContent 
                        title={"Digital Content And Devices"}
                        one={"Amazon miniTV"}
                        two={"Echo & Alexa"}
                        three={"Fire TV"}/>

                        <SideNavContent 
                        title={"Shop By Category"}
                        one={"Mobiles, Computers"}
                        two={"TV, Appliances, Electronics"}
                        three={"Men's Fashion"}/>

                        {/* <SideNavContent 
                        title={"Programs & Features"}
                        one={"Best Sellers"}
                        two={"New Releases"}
                        three={"Movers and Shakers"}/> */}

                        {/* <SideNavContent 
                        title={"Help & Settings"}
                        one={"Your Account"}
                        two={"Customer Service"}
                        three={"Sign in"}/> */}

                        <span onClick={()=>setSideBar(false)} className="cursor-pointer absolute top-0 left-[70%] md:left-[360px] w-10 h-10  flex items-center justify-center text-white duration-300">
                            <CloseIcon  className='scale-150'/>
                        </span>

                    </div>
                </motion.div>
                </div>
            </div>
        )}

    </div>
  )
}

export default HeaderBottom