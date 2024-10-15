import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [theme, setTheme] = useState('light')

    const changeTheme = () =>{
        setTheme((prevTheme)=> (prevTheme==='light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        document.body.className = theme ===  'light' ? 'bg-white text-black' : 'bg-black text-white';
    }, [theme])
    

  return (
    <div className={`flex justify-between px-32 h-[80px] items-center shadow-xl transition-colors duration-300 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div>logo</div>
      <div onClick={changeTheme} className='cursor-pointer'>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</div>
    </div>
  )
}

export default Navbar
