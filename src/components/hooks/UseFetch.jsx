import React, { useEffect, useState } from 'react'

export function UseFetch(url) {
  
const [data, setData] = useState(null)

const [ispending , setIspending] = useState(false)

const [error , setError] = useState(null)
 useEffect(() => {
    const fetchData = async () => {

        try {
        setIspending(true)
        const res  =await fetch(url)
        const data = await res.json()
        setData(data)
        setIspending (false)
        }catch (err) {

            console.log(err.message);
            setError(err.message)
            setIspending(false)
        }





    }
    fetchData()
 }, [url])

 return { data , ispending , error}



}

