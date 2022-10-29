import React from "react"
import {MasterBox,Box} from "./Styled"
import { FcApproval} from "react-icons/fc";


export function ThankYouPage (){

    return (

        <MasterBox>
                <Box>
                    <div>
                        <h1>Incrição realizada com sucessoooo!</h1>
                        <span>Fique de olho em seu email, entraremos em contato</span>
                        <FcApproval size={70}/>
                    </div>
                </Box>
        </MasterBox>
    )
}