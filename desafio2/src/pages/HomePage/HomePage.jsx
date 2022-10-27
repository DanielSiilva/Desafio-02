import React from "react"
import {MasterBox, FormBox,PersonalBox, DestinationBox} from "./Styled"
import {useRequestsData} from '../../services/resquests/useRequestData'



export function HomePage (){

    const [citys] = useRequestsData("city", [])
    const [coutres] = useRequestsData("country", [])

    const listOfCities = citys ? citys.map((city, index) =>{
        return (<option key={index}>{city.name}</option>)
    }) : <p>Carregando...</p>;
    
    const listOfCoutre = coutres ? coutres.map((coutre, index) =>{
        return (<option key={index}>{coutre.name}</option>)
    }) : <p>Carregando...</p>;


    function handleInputInvalid(event){
        event.target.setCustomValidity("Esse campo é obrigatório")
    }

    function handleNewTextInput(event) {
        event.target.setCustomValidity('');
        
    }

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
                                <input
                                    placeholder="Digite seu nome"
                                    onChange={handleNewTextInput}
                                    onInvalid={handleInputInvalid}
                                    required

                                />
                                <label>Email</label>
                                <input
                                    placeholder="seu@gmail.com"
                                    onChange={handleNewTextInput}
                                    onInvalid={handleInputInvalid}
                                    required
                                />
                                
                                <label>Telefone</label>
                                <input
                                    placeholder="(99) 99999-99999"
                                    onChange={handleNewTextInput}
                                    onInvalid={handleInputInvalid}
                                    required
                                />
                                <label>CPF</label>
                                <input
                                    placeholder="999.999.999-99"
                                    onChange={handleNewTextInput}
                                    onInvalid={handleInputInvalid}
                                    required
                                />
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
                   
                    <button type="submit">Enviar</button>
                </form>
                

            </MasterBox>
            
        </>
    )

}