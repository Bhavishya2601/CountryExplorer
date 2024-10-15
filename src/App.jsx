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

  const handleSearchUpdate = (search) =>{
    setFilter(search)
  }

  const selectUpdate = (select) =>{
    setSelect(select)
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
    <Navbar />
    <Filter searchUpdate={handleSearchUpdate} selectUpdate={selectUpdate}/>
    <Countries data={data} error={error}/>
    </>
  )
}

export default App
