import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Countries from './components/Countries'
import Filter from './components/Filter'

function App() {

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [filter, setFilter] = useState("")
  const [select, setSelect] = useState("")
  const [theme, setTheme] = useState('light')

  const handleSearchUpdate = (search) =>{
    setFilter(search)
  }

  const selectUpdate = (select) =>{
    setSelect(select)
  }

  const changeTheme = () =>{
    setTheme((prevTheme)=> (prevTheme==='light' ? 'dark' : 'light'))
    console.log(theme)
}

  useEffect(() => {
    const fetchData = async () => {
      let update
      if (filter){
        update = `name/${filter}`
      } else if (select){
        update = `region/${select}`
      } else {
        update = 'all'
      }
      
      let url = `https://restcountries.com/v3.1/${update}?fields=name,capital,region,area,population,continents,flags,maps`
      try {
        const response = await axios.get(url)
        setData(response.data)
        setError('')
      } catch (err) {
        setError('Something went wrong while fetching data.');
      }
    }

    fetchData()
  }, [select, filter])

  return (
    <>
    <Navbar changeTheme={changeTheme} theme={theme}/>
    <div className={`${theme==='light'? 'bg-white' : 'bg-black'} transition-colors duration-300`}>
    <Filter searchUpdate={handleSearchUpdate} selectUpdate={selectUpdate} theme={theme}/>
    <Countries data={data} error={error} theme={theme}/>
    </div>
    </>
  )
}

export default App
