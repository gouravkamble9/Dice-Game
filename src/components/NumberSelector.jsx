import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError,selectedNumber,setSelectedNumber,error}) => {
    const arrayNum=[1,2,3,4,5,6]

    const numberSelector=(item)=>{
        setSelectedNumber(item)
        setError("")
    }
    
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>


        {arrayNum.map((item,index)=>(
            <Box 
            isSelecred={item === selectedNumber}
            key={index}
            onClick={()=>numberSelector(item)}
            >
            {item}
        </Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
    }

    .error{
        color: red;
    }

    @media only screen and (max-width:550px){
        width: 80%;
        align-items: center;
        gap: 1rem;
        p{
            font-size: 16px;
            font-weight: unset;
        }
    }
`

const Box=styled.div`
    width:72px ;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>(props.isSelecred ? "black" : "white")};
    color: ${(props)=>(props.isSelecred ? "white" : "black")};
    cursor: pointer;

    @media only screen and (max-width:550px){
        
        width:35px ;
        height: 35px;
        border-radius: 5px;
    }

`