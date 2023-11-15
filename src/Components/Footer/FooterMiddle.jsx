import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../Constants'
import {logo} from '../../assets/index'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:place-items-center md:items-start" >
            {middleList.map((item, i)=>(
              <FooterMiddleList key={item._id} title={item.title} listItem={item.listItem}/>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <div className='cursor-pointer'>
          <img src={logo} className='w-20  pt-3' />
        </div>
        <div className='p-2 px-4  flex gap-2 border border-gray-500 text-sm font-light hover:border-amazon_yellow cursor-pointer duration-200'>
          <p className="   "> <LanguageIcon className='scale-75'/></p>
          <span className='text-sm '>English <ArrowDropDownIcon/> </span>
        </div>
      </div>

    </div>
  )
}

export default FooterMiddle