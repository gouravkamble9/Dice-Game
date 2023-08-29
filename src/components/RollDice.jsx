import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,setCurrentDice,roleDice}) => {

    

    
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`src/assets/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click On Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
display: flex;
align-items: center;
margin-top: 48px;
flex-direction: column;


.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}

@media only screen and (max-width:550px){
    margin-top: 12px;
}
    
`