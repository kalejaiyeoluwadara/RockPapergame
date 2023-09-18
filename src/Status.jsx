import React from 'react'
import { Select } from './Game';
import { motion } from "framer-motion";
import { useGlobal } from './context';
function Status() {
  const { lizard, paper, rock, spock,house,score,setScore,setHouse, msg,setMsg,scissors,user,setUser } = useGlobal();
  
 function check(item){
   let ch;
   if (item === "lizard") {
     ch = lizard;
   } else if (item === "paper") {
     ch = paper;
   } else if (item === "rock") {
     ch = rock;
   } else if (item === "spock") {
     ch = spock;
   } else if (item === "scissors") {
     ch = scissors;
   }
   return ch;
 }
 function determineWinner(a, b) {
  // let msg;
   if (
     (a === "spock" && b === "scissors") ||
     (a === "spock" && b === "rock") ||
     (a === "lizard" && b === "spock") ||
     (a === "scissors" && b === "paper") ||
     (a === "scissors" && b === "lizard") ||
     (a === "rock" && b === "scissors") ||
     (a === "rock" && b === "lizard") ||
     (a === "lizard" && b === "paper") ||
     (a === "paper" && b === "spock") ||
     (a === "paper" && b === "rock")
   ) {
     return "you win";
   } else if (a === b) {
     return "It's a tie"
   } else {
    return "You lose";
   }
 }
  const result = determineWinner(user, house);

  const updateScore = () => {
    if (result === "you win") {
      setScore(score + 1);
    } else if (result === "You lose") {
      setScore(score - 1);
    }
  };

  return (
    <>
      <motion.main
        initial={{
          scale: 0.1,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        exit={{
          scale: 0,
        }}
        className="relative py-8 px-4 flex justify-between items-center  h-[400px] w-[90%] sm:w-[500px] "
      >
        <div className="flex flex-col justify-center items-center ">
          <Select img={check(user)} color={"hsl(39, 89%, 49%)"} />
          <p className="uppercase text-white tracking-[0.1em] font-[500] text-[14px] sm:text-[17px] mt-3  ">
            You chose
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Select img={check(house)} color={"hsl(189, 58%, 57%)"} />
          <p className="uppercase text-white tracking-[0.1em] font-[600] text-[14px] sm:text-[17px] mt-3  ">
            the house chose
          </p>
        </div>
      </motion.main>
      <div className="flex flex-col items-center justify-center mb-4 gap-2">
        <h1 className=" text-[50px] uppercase text-white font-[700] ">
          {determineWinner(user, house)}
        </h1>
        <button
          onClick={() => {
            setUser(null);
            updateScore();
          }}
          className="w-[300px] text-[20px] bg-white rounded-md uppercase font-[600] shadow-md  py-3 "
        >
          Play again
        </button>
      </div>
    </>
  );
}

export default Status
