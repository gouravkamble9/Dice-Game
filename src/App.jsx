import React, { useState } from 'react'
import styled from "styled-components"
import StartGame from './components/StartGame'
import GamePLay from './components/GamePLay'


const App = () => {

  const [isGameStarted,setIsGameStarted]=useState(true)

  const toggleGamePLay=()=>{
    setIsGameStarted(!isGameStarted);
  }
  return (
    <>
    {isGameStarted ? <GamePLay/> : <StartGame toggle={toggleGamePLay}/>}
    </>
  )
}

export default App