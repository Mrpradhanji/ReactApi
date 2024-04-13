import { useEffect,useState } from "react"

//use as a standard name
function useCurrencyInfo(currency){
    const [data ,setData] = useState ({}) //empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data);
    return data
} 

export default useCurrencyInfo;

//custom hook designed above