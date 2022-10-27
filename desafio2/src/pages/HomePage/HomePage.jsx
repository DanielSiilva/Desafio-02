import {MasterBox, FormBox,PersonalBox, DestinationBox} from "./styledMain"

import {DestinationInterest} from '../../components/destinationInterest/DestinationInterest'
import {PersonalData} from "../../components/personalData/PersonalData"


export function HomePage (){

    function Enviar (){
        alert("Enviado")
    }


    return(
        <>
            <MasterBox>
                {/* <PersonalData/> */}
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
                        </DestinationBox>
                    </FormBox>
                   
                    <button>Enviar</button>
                </form>
                

            </MasterBox>
            
        </>
    )

}