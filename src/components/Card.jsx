import React from 'react'

const Card = ({ name, capital, region, area, population, continents, flags, maps }) => {

    const insertCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };      

    return (
        <div className='w-[310px] pb-3 shadow-xl flex flex-col gap-4 rounded-xl'>
            <div className='relative border-b-2'>
            <div><a href={maps.googleMaps} target='_blank' className='absolute z-1 top-2 right-2'>
                <img src="maps.png" alt="map" className='h-8 w-8 bg-white py-1 px-2 rounded-full'/>
                </a></div>
            <img src={flags.png} alt={name.common} className='h-[200px] w-full rounded-t-xl' />
            </div>
            <div className='flex flex-col gap-[2px] px-3 text-lg'>
                <div className='text-2xl font-bold'>{name.common}</div>
                <div><span className='font-bold'>Country capital:</span> {capital[0]}</div>
                <div><span className='font-bold'>Region:</span> {region}</div>
                <div><span className='font-bold'>Area:</span> {insertCommas(area)} km<sup>2</sup></div>
                <div><span className='font-bold'>Population:</span> {insertCommas(population)}</div>
                <div><span className='font-bold'>Continents:</span> {continents[0]}</div>
            </div>
        </div>
    )
}

export default Card
