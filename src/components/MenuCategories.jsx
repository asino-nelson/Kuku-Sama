import React from 'react'

const MenuCategories = () => {
  return (
    <div className='flex md:w-full items-center justify-center md:gap-9 gap-5'>
      <button className='rounded-full bg-yellow-500/60 hover:bg-yellow-500 px-5 py-2 '>Breakfast</button>
      <button className='rounded-full bg-yellow-500/60 hover:bg-yellow-500 px-5 py-2 '>Special</button>
      <button className='rounded-full bg-yellow-500/60 hover:bg-yellow-500 px-5 py-2 '>Dessert</button>
    </div>
  )
}

export default MenuCategories
