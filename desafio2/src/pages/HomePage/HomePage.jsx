import {MasterBox, Conteiner} from "./styledMain"

import {DestinationInterest} from '../../components/destinationInterest/DestinationInterest'
import {PersonalData} from "../../components/personalData/PersonalData"


export function HomePage (){




    return(
        <Conteiner>
            <MasterBox>
                <PersonalData/>
                <DestinationInterest/>
               
            </MasterBox>
            
            <div>
                <button> Enviar</button>
            </div> 
            
        </Conteiner>
    )

}