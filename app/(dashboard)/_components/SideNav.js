"use client"
import { Shield, Upload, File } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SideNav() {
  const menuList = [
    {
      id:1,
      name:'Upload',
      icon: Upload,
      path:'/upload'
    },
    {
      id:2,
      name:'Files',
      icon: File,
      path:'/files'
    },
    {
      id:3,
      name:'Upgrade',
      icon: Shield,
      path:'/upgrade'
    },
  ]

  const [activeIndex, setActiveIndex] = useState();
  const router = useRouter();
  
  const handleNavigation = (path, index) => {
    setActiveIndex(index);
    router.push(path);
  }

  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b'>
        <Image src='/logo.svg' width={75} height={50} alt='logo'/>
      </div>
      <div className={`flex flex-col float-left w-full text-gray-400`}>
        {menuList.map((item, index) => (
          <button className={`flex gap-2 p-4 px-6 hover:bg-gray-100 ${activeIndex == index ? 'bg-blue-50 text-primary' : null}`} onClick={(() => handleNavigation(item.path, index))} key={index}>
            <item.icon/>
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SideNav