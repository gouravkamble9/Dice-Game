import React from 'react'
import styled from 'styled-components'
import dice from '../assets/dices.png'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src={dice} alt="" />

        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>
            Play Now
            </Button>
        </div>
    </Container>
  )
}

export default StartGame


const Container=styled.div`
    max-width: 1180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content{
        h1{
            font-size: 96px;
        }


    }

`


const Button=styled.button`
    color: white;
    padding: 10px 18px;

    width: 220px;
    height: 44px;
    border: none;
    background: #000000;
    border-radius: 5px;
    font-size: 16px;
    border: 1x solid transparent;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`