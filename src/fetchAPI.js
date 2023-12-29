import axios from "axios"
import { useEffect, useState } from "react"

const fetchAPI=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data.users)
        })
    },[])
    return data
}

export default fetchAPI