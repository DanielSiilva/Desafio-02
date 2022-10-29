import React from "react";
import {MasterBox} from "./Styled"
import logo from '../../img/Logo.png'

export function Header(){



    return(
        <MasterBox>
            <img src={logo}/>
            <h1>Aprovado por centenas de empresas em todo o mundo</h1>
        </MasterBox>
    )
}