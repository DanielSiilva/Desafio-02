
import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"

import styled from "styled-components"

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;

`



function App() {


  return (
    <MasterBox>
      <HomePage/>
    </MasterBox>
  )
}

export default App

