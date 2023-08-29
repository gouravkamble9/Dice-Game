import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <ul className='text'>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on dice if selected number is equal to dice number you will get same points as dice</li>
            <li>if you get wrong guess then 2 points will be deducted</li>
        </ul>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #fbf1f1;
border-radius: 10px;
padding: 20px;
h2{
    font-size: 24px;
}

.text{
    margin-top: 24px;

}

@media only screen and (max-width:550px){
    max-width: 300px;
    height: 220px;
    margin-bottom: 10px;

    .text{
        margin-left: 10px;
    }
}
`