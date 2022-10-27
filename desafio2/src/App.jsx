
import React from "react"
import { HomePage } from "./pages/HomePage/HomePage"
import {Router} from './routes/Router'
import styled from "styled-components"

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;

`



function App() {


  return (
    <MasterBox>
      <Router/>
    </MasterBox>
  )
}

export default App

