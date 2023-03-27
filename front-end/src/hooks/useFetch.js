import { useEffect, useState } from "react";
import axios from 'axios';

//Using the function to get data from rest api 
const useFetch= (url)=>{
    //data are set in this 
    const[data,setData] = useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true);
            
            try {
                //function to get data from url 
                const res= await axios.get(url);
                setData(res.data);
            } catch (error) {
                setError(error)
            }

            setLoading(false);
        }
        fetchData();
    },[url]);
    //trying to refect the values 
    const refFetchData= async ()=>{
        setLoading(true);
        
        try {
            const res= await  axios.get(url);
            setData(res.data);
        } catch (error) {
            setError(error)
        }

        setLoading(false);
    };

    return {data,loading,error,refFetchData};

}

export default useFetch