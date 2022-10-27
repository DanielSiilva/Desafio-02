import styled from "styled-components";

export const MasterBox = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  width: 45vw;
  height: 70vh;
  border: 1px solid black;

`
export const Title = styled.h1 `

`


export const Form = styled.form `
  display: flex;
  flex-direction: column;
  
  gap: 1rem;

  select{
    width: 40vw;
    height: 2rem;
    font-size: 1rem;
    
  }

  option{
    font: 1.5rem;
  }

`