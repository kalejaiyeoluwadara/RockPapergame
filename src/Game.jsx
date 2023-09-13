import React,{useState} from 'react'
import './App.css'

import close from './assets/icon-close.svg'
import pentagon from './assets/bg-pentagon.svg'
import rules from './assets/image-rules-bonus.svg'
import Status from './Status'
// import { slots } from './slots'
import { useGlobal } from './context';
const Header = () =>{
    return (
      <header className="flex w-[80%] justify-between items-center px-6 py-2 header rounded-[9px]   ">
        <div className="flex flex-col leading-[14px] uppercase font-[600] text-white ">
          {["rock", "papper", "scissors", "lizard", "spock"].map(
            (d, id) => {
              return (
                <p className="" key={id}>
                  {d}
                </p>
              );
            }
          )}
        </div>
        <div className="flex rounded-md items-center uppercase bg-white flex-col leading-[43px] px-8 py-2 ">
          <p className="text-blue-600 font-[600] ">score</p>
          <p className="text-[48px] text-gray-700  font-[800]">12</p>
        </div>
      </header>
    );
}
const Footer = () => {
  const { setRules } = useGlobal();
  return (
    <footer className="foot">
      <p
        onClick={() => {
          setRules(true);
        }}
        className="text-white cursor-pointer px-4 py-2 uppercase font-[500] text-[20px] "
      >
        Rules
      </p>
    </footer>
  );
  
};
const Rules = () =>{
  const { setRules } = useGlobal();
  return (
    <div className="absolute bg-white flex  gap-10 flex-col items-center justify-center top-0 h-screen w-screen z-20">
      <img src={rules} className="" alt="" />
      <img onClick={() =>{
        setRules(false)
      }} src={close} className='cursor-pointer' alt="" />
    </div>
  );
}
export const Select = ({img,color,choice}) =>{
  const {user,setUser} =useGlobal();
 return(
    <div 
    style={{
        borderColor:`${color}`
    }}
    onClick={() =>{
      setUser(choice)
      // if(user === 'rock'){
      //   console.log(true);
      // }
      // else{
      //   console.log(false);
      // }
      console.log(user);
    }}
    className={`bg-white border-[15px] shad  h-[120px] w-[120px] rounded-full flex items-center justify-center  `}>
        <img src={img} alt="" />
    </div>
 )
}
const Main = () =>{
  const { lizard, paper, rock,user, spock, scissors } = useGlobal();
    return (
      <>
        {!user ? (
          <main className="relative py-8 flex flex-col px-6 gap-6 items-center  justify-center h-[500px] w-[100%] ">
            <div className="relative w-[100%] z-20 flex flex-col gap-6 items-center  justify-center">
              <div>
                {/* <Select
                  img={slots.scissors.img}
                  choice={slots.scissors.choice}
                  color={slots.scissors.color}
                /> */}
              </div>
              <div className="flex w-[99%] justify-between ">
                <Select
                  choice={"spock"}
                  img={spock}
                  color={"hsl(189, 58%, 57%)"}
                />
                <Select
                  choice={"paper"}
                  img={paper}
                  color={"hsl(230, 89%, 62%)"}
                />
              </div>
              <div className="flex w-[90%] justify-between ">
                <Select
                  choice={"lizard"}
                  img={lizard}
                  color={"hsl(261, 73%, 60%)"}
                />
                <Select
                  choice={"rock"}
                  img={rock}
                  color={"hsl(349, 71%, 52%)"}
                />
              </div>
            </div>
            <div className="absolute z-10 ">
              <img className=" " src={pentagon} alt="" />
            </div>
          </main>
        ) : (
          <Status />
        )}
      </>
    );
}

function Game() {
  const { rules, setRules } = useGlobal();
  return (
    <div className='game py-3 relative justify-center items-center flex flex-col h-screen overflow-x-hidden w-screen ' >
      <Header/>
      <Main/>
      {rules && <Rules/>}
      <Footer/>
    </div>
  )
}

export default Game
