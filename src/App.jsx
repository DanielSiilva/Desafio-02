
import React from "react"

import {Router} from './routes/Router'
import styled from "styled-components"
import { Header } from "./components/Header/Header"

export const MasterBox = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;

`



function App() {


  return (
    <MasterBox>
      <Header/>
      <Router/>
    </MasterBox>
  )
}

export default App

