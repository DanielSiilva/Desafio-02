
import React from "react"
import { Main } from "./components/Main/Main"

import styled from "styled-components"

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;

`



function App() {


  return (
    <MasterBox>
      <Main/>
    </MasterBox>
  )
}

export default App

