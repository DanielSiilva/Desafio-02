import { useState, useEffect } from "react"
import { useRequestsData } from "../../services/resquests/useRequestData"
import {MasterBox, Form, Title} from "./Stylede"



export function DestinationInterest (){
    const [citys] = useRequestsData("city", [])
    const [coutres] = useRequestsData("country", [])

    const listOfCities = citys ? citys.map((city) =>{
        return (<><option>{city.name}</option></>)
    }) : <p>Carregando...</p>;
    
    const listOfCoutre = coutres ? coutres.map((coutre) =>{
        return (<><option>{coutre.name}</option></>)
    }) : <p>Carregando...</p>;


    return (

        <MasterBox>
            <h1> Componente de Destino</h1>
            <Form>
                <label> País</label>
                <select>
                    <option>Escolha um País</option>
                    {listOfCoutre}
                </select>
                <label> Ciade</label>
                <select>
                    <option>Escolha uma cidade</option>
                    {listOfCities}
                </select>
             
            </Form>
            
            
        </MasterBox>
    )
}