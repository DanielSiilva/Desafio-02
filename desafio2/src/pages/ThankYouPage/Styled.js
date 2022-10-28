import styled from "styled-components";

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height:70vh;

  margin-top: 3rem;

` 

export const Box = styled.section `
    display: flex;
    align-items: center;
    flex-direction: column;

    border: 1px solid #dddd;
    border-radius: 10px;
    box-shadow: 4px 3px 5px 0px rgba(11,3,240,1);
    width: 40vw;
    height:70vh;

    div{
      display:flex;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      height: 70vh;
    }

`