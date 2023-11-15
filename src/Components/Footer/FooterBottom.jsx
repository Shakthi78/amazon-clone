import React from 'react'
import { footerBottomItem } from '../../Constants'

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom p-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-rows-2 grid-cols-2 md:grid-cols-4 gap-4 place-content-center'>
          {
            // try to change underline color
            footerBottomItem.map((item, i)=>(
              <div key={i} className='text-white w-36  group'>
                <h3 className='text-sm group-hover:underline'>{item.title}</h3>
                <h3 className='text-xs font-light text-gray-400 group-hover:underline'>{item.des}</h3>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default FooterBottom