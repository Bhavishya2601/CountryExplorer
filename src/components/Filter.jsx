import React, { useEffect, useState } from 'react'

const Filter = ({searchUpdate, selectUpdate, theme}) => {
    const [input, setInput] = useState('')
    const [select, setSelect] = useState('')

    useEffect(() => {
      searchUpdate(input)
    }, [input, searchUpdate])

    useEffect(() => {
        selectUpdate(select)
    }, [select, selectUpdate])
    
    
    const handleSearch = (e) =>{
        setInput(e.target.value)
    }

    const handleSelect = (e) =>{
        setSelect(e.target.value)
    }

  return (
    <div className='py-10 px-24 flex justify-between'>
      <div className={`flex gap-1 items-center shadow-xl px-3 py-1 ${theme==='light' ? '' : 'bg-gray-800'} transition-colors duration-300`}>
        <img src={`${theme==='light' ? 'search-black.svg' : 'search-white.svg'}`} alt="" className='h-5 transition-colors duration-300' />
        <input type="text" placeholder='Search for a Country' id="search" name="search" className={`px-4 py-2 outline-none ${theme==='light' ? '' : 'bg-gray-800 text-white'} transition-colors duration-300`} value={input} onChange={handleSearch} />
      </div>
      <div>
        <select name="filter" id="filter" className={`px-4 py-2 shadow-xl outline-none w-48 ${theme==='light' ? '' : 'bg-gray-800 text-white'} transition-colors duration-300`} onChange={handleSelect}>
            <option>Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="antarctic">Antarctic</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
