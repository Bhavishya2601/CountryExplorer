import Card from "./Card"

const Countries = ({data, error, theme}) => {
  if (error)
  return <div className={`font-bold text-[30px] items-center h-[400px] flex justify-center ${theme==='light'? "text-black" : 'text-white'} transition-colors duration-300`}>{error}</div>

  return (
    <div className='flex flex-wrap mx-20 gap-[35px] py-5'>
        {data.map((item, index) => (
          <Card key={index} {...item} theme={theme} />
        ))}
      </div>
  )
}

export default Countries
