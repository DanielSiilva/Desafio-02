import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/url"
import axios from "axios";




export const useRequestsData = (endpoint, initialState) =>{
   
    const [data, setData] = useState(initialState)
    
    const getRequestsData = () =>{
        axios.get(`${BASE_URL}/${endpoint}`)
        .then((response) =>{
            setData(response.data)
        })
        .catch((error) =>{
            alert("erro na requição")
        })
    }

    useEffect(() =>{
        getRequestsData()
    }, [endpoint])

    return [data, getRequestsData]

}//endpoit é a chamadata para cada url que desejo usar