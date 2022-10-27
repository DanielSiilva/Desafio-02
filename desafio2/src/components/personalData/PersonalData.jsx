import {MasterBox, CaixaPessoa, CaixaPaises, CaixaPrincipal} from './Styled'
import {useForm} from "../../hooks/useForm"
import { useState } from 'react'
import { DestinationInterest } from '../destinationInterest/DestinationInterest'


export function PersonalData (){
  
    function Enviar (event){
        event.preventDefault()
    }


    return (
        <CaixaPrincipal>
            <MasterBox>
                <CaixaPessoa>
                    <h1>Dados pessois</h1>
                    <form onSubmit={Enviar}>
                        <lable>Nome</lable>
                        <input/>

                        <lable>Email</lable>
                        <input/>

                        <lable>Telefone</lable>
                        <input/>

                        <lable>CPF</lable>
                        <input/>

                    </form>    
                </CaixaPessoa>
            <CaixaPaises>
                <DestinationInterest 
                    Enviar = {Enviar}
                />
            </CaixaPaises>
            
        </MasterBox>
            <button >Enviar</button>
        </CaixaPrincipal>
        
    )
}