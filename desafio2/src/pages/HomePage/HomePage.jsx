import React from "react"
import {MasterBox, FormBox,PersonalBox, DestinationBox} from "./Styled"
import {useRequestsData} from '../../services/resquests/useRequestData'



export function HomePage (){

    const [citys] = useRequestsData("city", [])
    const [coutres] = useRequestsData("country", [])

    const listOfCities = citys ? citys.map((city) =>{
        return (<><option>{city.name}</option></>)
    }) : <p>Carregando...</p>;
    
    const listOfCoutre = coutres ? coutres.map((coutre) =>{
        return (<><option>{coutre.name}</option></>)
    }) : <p>Carregando...</p>;

    function Enviar (){
        alert("Enviado")
    }


    return(
        <>
            <MasterBox>
                <form onSubmit={Enviar}>
                    <FormBox>
                        <PersonalBox>
                            <h1>Dados pessoais</h1>
                            <div>
                                <label>Nome</label>
                                <input></input>
                                <label>Email</label>
                                <input></input>
                                <label>Telefone</label>
                                <input></input>
                                <label>CPF</label>
                                <input></input>
                            </div>
                            
                        </PersonalBox>


                        <DestinationBox>
                            <h1>Destino de Interesse</h1>
                            <div>
                                <label> Países</label>
                                <select>
                                    <option>Escolha um País</option>
                                    {listOfCoutre}
                                </select>
                                <label> Cidades</label>
                                <select>
                                    <option>Escolha uma cidade</option>
                                    {listOfCities}
                                </select>
                            </div>
                        </DestinationBox>
                    </FormBox>
                   
                    <button>Enviar</button>
                </form>
                

            </MasterBox>
            
        </>
    )

}