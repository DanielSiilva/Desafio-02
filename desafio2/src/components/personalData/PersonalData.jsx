import {MasterBox, CaixaPessoa, CaixaPaises, CaixaPrincipal} from './Styled'
import {useForm} from "../../hooks/useForm"
import { useState } from 'react'
import { DestinationInterest } from '../destinationInterest/DestinationInterest'


export function PersonalData (){
  
   


    return (
        <CaixaPrincipal>
            <MasterBox>
                <CaixaPessoa>
                    <h1>Dados pessois</h1>
                    <form>
                        <label>Nome</label>
                        <input
                            name="comment"
                            placeholder="Deixe um comentário"
                        // value={newCommentText}
                        // onChange={handleNewCommentChange}
                        // onInvalid={handleNewCommentInvalid}
                        // required
                        />
                        <label>Nome</label>
                        <input
                            name="comment"
                            placeholder="Deixe um comentário"
                        // value={newCommentText}
                        // onChange={handleNewCommentChange}
                        // onInvalid={handleNewCommentInvalid}
                        // required
                        />


                        
                        <footer>
                            <button >
                                Publicar
                            </button>
                        </footer>
                    </form>  
                </CaixaPessoa>
                <CaixaPaises>
                    <DestinationInterest/>
                </CaixaPaises>
            
            </MasterBox>
            
        </CaixaPrincipal>
        
    )
}