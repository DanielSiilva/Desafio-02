import styled from "styled-components";



export const MasterBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 5rem;
  
  width: 100vw; 
  height: 100vh;


  form{
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 5rem;
    padding:2rem;
    width: 90vw;
  }

  button{

    width: 10vw;
    height: 5vh;
    font-size: 1.6rem;
  }

`

export const FormBox = styled.div `
  display: flex;
  justify-content: center;
  gap: 2rem;


`

export const PersonalBox = styled.section `
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:1rem;

    border: 1px solid black;
    width: 40vw;
    height:70vh;

    div{
      display:flex;
      flex-direction: column;
      gap:0.8rem;
      width: 70%;
    }
    
    label{
      font-size: 1.5rem;
      font-weight: bold;
    }
    input{
      height: 2rem;
    }

`


export const DestinationBox = styled.section `

    display: flex;
    align-items: center;
    flex-direction: column;


    border: 1px solid black;
    width: 40vw;
    height:70vh;

    div{
      display:flex;
      flex-direction: column;
      gap:0.8rem;
      width: 70%;
    }
    
    label{
      font-size: 1.5rem;
      font-weight: bold;
    }
    input{
      height: 2rem;
    }


`
