import styled from "styled-components";

export const CaixaPrincipal = styled.div `
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

  button{
    width:15vw;
    height: 2rem;
    cursor:pointer
  }
`


export const MasterBox = styled.div `

  display: flex;
  justify-content: center;
  gap: 2rem;



  width: 80vw;
  height: 80vh;
  margin-top:10rem;
  padding: 2rem;
  

`
export const CaixaPessoa = styled.div`
    display: flex;
    align-items:center;
    flex-direction:column;
    width: 40vw;

    border: 1px solid black;

    h1{
      margin-top:50px;
    }

    form{
      display: flex;
      flex-direction:column;
      width:25rem;
      margin-top: rem;
      padding:2rem;

      gap: 1rem;
    }

    input{
      height: 2rem;
    }


`
export const CaixaPaises = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;

    width: 40vw;

    border: 1px solid black;

`




