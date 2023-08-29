import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePLay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules,setShowRules]=useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You Have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore=()=>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button 
        onClick={resetScore}
        >Reset</Button>
        <Button 
        onClick={()=>setShowRules(prev=>!prev)}
        >{showRules ? "Hide" :"Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePLay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media only screen and (max-width:550px){
    .top_section {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
  }
`;


const Button=styled.button`
    color: black;
    padding: 10px 18px;

    width: 220px;
    height: 44px;
    background: transparent;
    border-radius: 5px;
    font-size: 16px;
    border: 1x solid black;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover{
        background-color: black;
        color: white;
  
    }
`