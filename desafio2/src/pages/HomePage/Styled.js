import styled from "styled-components";



export const MasterBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2rem;
    padding:1rem;
    width: 90vw;
  }

  button{

    width: 10vw;
    height: 5vh;
    font-size: 1.6rem;
    border-radius: 10px ;
    cursor: pointer;
  }

  button:hover{
    background-color: #1740ab;
    color: #ffffff;
    font-weight:bold;
  }

  

`

export const FormBox = styled.div `
  display: flex;
  justify-content: center;
  gap: 1rem;


`

export const PersonalBox = styled.section `
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:1rem;

    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 4px 3px 5px 0px rgba(11,3,240,1);
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
    gap:1rem;

    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 4px 3px 5px 0px rgba(11,3,240,1);
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
    
    select{
      width:30vw;
      height:2rem;
    }

`
