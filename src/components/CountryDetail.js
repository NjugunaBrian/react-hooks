import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

const CountryDetail = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    const fetchCountryDetail = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const country = await response.json();
        setCountry(country);
    }
    useEffect(() => {
        fetchCountryDetail();

    })

    return (
        <>
            <Header />
            <section className='p-7 md:p-20'>
                {country.map((c) => {
                    const { flags, name, region, subregion, population, capital, borders } = c;

                    return <article className='grid grid-cols-1 md:grid-cols-2 md:place-items-center' key={name.common}>
                        <img className='rounded md:h-72 w-full object-cover' src={flags.svg} alt={name} />

                        <div>
                            <div>
                                <h2 className='font-semibold text-xl tracking-wide'>{name.common}</h2>
                            </div>
                            <div className='my-2.5 inline-block'>

                                <h5 className='font-semibold'>Population: <span className='font-light'>{population.toLocaleString()}</span></h5>
                                <h5 className='font-semibold'>Native Name: <span className='font-light'>{name.official}</span></h5>
                                <h5 className='font-semibold'>Region: <span className='font-light'>{region}</span></h5>
                                <h5 className='font-semibold'>Sub-Region: <span className='font-light'>{subregion}</span></h5>
                                <h5 className='font-semibold'>Capital: <span className='font-light'>{capital}</span></h5>

                                {c.borders && (
                                    <>
                                        <div className='mt-3'>
                                            <h5 className='font-semibold tracking-wide'>Borders: </h5>
                                            <ul className='flex flex-wrap md:items-center md:justify-center gap-2'>
                                                {borders.map((b) => (
                                                    <li key={b} className='py-1 px-4 bg-slate-700 rounded-lg'>
                                                        {b}
                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}



                            </div>
                            <Link className='flex justify-between items-center px-2 mb-7 bg-slate-700 w-20 rounded-full' to="/"><BsFillArrowLeftCircleFill />Back</Link>


                        </div>

                    </article>

                })}
            </section>
        </>
    )
}

export default CountryDetail