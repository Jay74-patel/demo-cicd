import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const Home = () => {
   const [result, setresult] = useState([])
    useEffect(() => {
        const apikey = "https://restcountries.com/v3.1/all"
        axios.get(apikey)
                        .then(Response => setresult(Response.data))
    })

  return (
    <div className='main'>{result.map((contry)=> {return<div>

            <h2 className='contryName'>{contry.name.common}</h2>
            <img className= 'flag' src={contry.flags.png} alt={`Flag of ${contry.name.common}`}/>
            </div>
    })}</div>
  )
}
