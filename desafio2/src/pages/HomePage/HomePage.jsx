import {MasterBox, Conteiner, ButtonSend} from "./styledMain"

import {DestinationInterest} from '../../components/destinationInterest/DestinationInterest'
import {PersonalData} from "../../components/personalData/PersonalData"


export function HomePage (){




    return(
        <Conteiner>
            <MasterBox>
                <PersonalData/>
                <DestinationInterest/>
               
            </MasterBox>
            
            <ButtonSend>
                <button> Enviar</button>
            </ButtonSend> 
            
        </Conteiner>
    )

}