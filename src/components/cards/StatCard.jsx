
import React from 'react'
import Image  from 'next/image';

const StatCard = ({icon, stat, label}) => {
  return (
    <div className="rounded-md p-2 bg-white flex gap-2">
    <div >
      <Image src={icon} alt="" width={20} height={20} className="object-cover"/>
    </div>
    
    <div className="flex flex-col ">
      <div className="text-lg">{stat}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
    </div>
  )
}

export default StatCard