import React from "react"
import {MasterBox, FormBox,PersonalBox, DestinationBox} from "./Styled"
import {useRequestsData} from '../../services/resquests/useRequestData'
import {goToObrigado} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


export function HomePage (){
    const navigate = useNavigate()
    const [citys] = useRequestsData("city", [])
    const [coutres] = useRequestsData("country", [])

    const listOfCities = citys ? citys.map((city, index) =>{
        return (<option key={index}>{city.name}</option>)
    }) : <p>Carregando...</p>;
    
    const listOfCoutre = coutres ? coutres.map((coutre, index) =>{
        return (<option key={index}>{coutre.name}</option>)
    }) : <p>Carregando...</p>;


    

    


    return(
        <>
            <MasterBox>
                <form onSubmit={()=>goToObrigado(navigate)}>
                    <FormBox>
                        <PersonalBox>
                            <h1>Dados pessoais</h1>
                            <div>
                                <label>Nome</label>
                                <input
                                    placeholder="Digite seu nome"
                                    type={'text'}
                                    required
                                    pattern ={"^.{5,}$"}
                                    title = {"O nome deve ter no mínimo 5 caracteres"}
                                />
                                <label>Email</label>
                                <input
                                    placeholder="seu@gmail.com"
                                    type={'text'}
                                    pattern ={"^.{5,}$"}
                                    title = {"@email deve ter no mínimo 5 caracteres"}
                                    required
                                />
                                
                                <label>Telefone</label>
                                <input
                                    placeholder="(99) 99999-99999"
                                    type={"number"}
                                    required
                                    min={11}
                                />
                                <label>CPF</label>
                                <input
                                     placeholder={"CPF"}
                                     type={"number"}
                                     required
                                     min={11}
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