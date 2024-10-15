import Card from "./card"

const Countries = (props) => {
  if (props.error)
  return <div className="font-bold text-[30px] items-center h-[400px] flex justify-center ">{props.error}</div>

  return (
    <div className='flex flex-wrap mx-20 gap-[35px] py-5'>
        {props.data.map((item, index) => (
          
          <Card key={index} {...item} />
        ))}
      </div>
  )
}

export default Countries
