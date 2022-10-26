import {MasterBox} from "./styledMain"

import {DestinationInterest} from '../../components/destinationInterest/DestinationInterest'
import {PersonalData} from "../../components/personalData/PersonalData"


export function HomePage (){




    return(
        <MasterBox>
            <PersonalData/>
            <DestinationInterest/>
        </MasterBox>
    )

}