import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Explore',
      path: '/explore'
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/contact us'
    },
  ]
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
    <div className='flex items-center gap-10'>
      <Image src='/logo.svg' alt='logo image' 
      width={60} height={60}/>

      <ul className='md:flex gap-8 hidden'>
        {Menu.map((item,index)=>(
          <Link href={item.path}>
            <li className='hover:text-blue-500 
              cursor-pointer hover-scale-105
              transition-all ease-in-out'>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
    <Button className='bg-blue-500 hover:bg-white hover:text-blue-500'>Get Started</Button>
    </div>
  )
}

export default Header