import React from 'react'

const Navbar = ({changeTheme, theme}) => {

  return (
    <div className={`flex justify-between px-32 h-[80px] items-center transition-colors duration-300 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} border-b-2`}>
      <div className='text-[25px] font-medium'>CountryExplorer</div>
      <div onClick={changeTheme} className='cursor-pointer'><img src={theme === 'light' ? 'moon.svg' : 'sun.svg'} alt="theme" className='h-5 w-5' /></div>
    </div>
  )
}

export default Navbar
