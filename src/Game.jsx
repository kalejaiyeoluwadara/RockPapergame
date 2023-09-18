import React,{useState} from 'react'
import './App.css'
import {motion,AnimatePresence} from 'framer-motion'
import close from './assets/icon-close.svg'
import pentagon from './assets/bg-pentagon.svg'
import rules from './assets/image-rules-bonus.svg'
import Status from './Status'
// import { slots } from './slots'
import { useGlobal } from './context';
const Header = () =>{
  const {score} = useGlobal();
    return (
      <header className="flex relative sm:top-8 sm:mb-3  w-[80%] justify-between items-center px-6 py-2  header rounded-[9px]   ">
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
          <p className="text-[48px] text-gray-700  font-[800]">{score}</p>
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
    <motion.div
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        y: "-100vh",
      }}
      className="absolute bg-white flex  gap-10 flex-col items-center justify-center top-0  sm:w-[60%] sm:rounded-md z-20 sm:h-[80%] sm:mt-[100px] h-screen w-screen z-20"
    >
      <img src={rules} className="" alt="" />
      <img
        onClick={() => {
          setRules(false);
        }}
        src={close}
        className="cursor-pointer"
        alt=""
      />
    </motion.div>
  );
}
export const Select = ({img,color,choice}) =>{
  const {user,setUser,setHouse,score,setScore,house,msg,setMsg} =useGlobal();
  let a = Math.floor(Math.random() * 5);
  var opts = ["lizard", "paper", "rock", "spock", "scissors"];
 return (
   <motion.div
   transition={{
    duration:0.3
   }}
     whileTap={{
       scale: 0.6,
     }}
     whileHover={{
       scale: 1.2,
     }}
     style={{
       borderColor: `${color}`,
     }}
     onClick={() => {
       setHouse(opts[a]);
       setUser(choice);
     
     }}
     className={`bg-white border-[15px] shad  h-[120px] w-[120px] rounded-full flex items-center justify-center  `}
   >
     <img src={img} alt="" />
   </motion.div>
 );
}
const Main = () =>{
  const { lizard, paper, rock,user, spock, scissors } = useGlobal();
    return (
      <AnimatePresence>
        {!user ? (
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
            className="relative py-8 flex flex-col px-6 gap-6 items-center  justify-center h-[500px] w-[100%] "
          >
            <div className="relative w-[100%] z-20 flex flex-col gap-6 items-center  justify-center">
              <div>
                <Select
                  img={scissors}
                  choice={"scissors"}
                  color={"hsl(39, 89%, 49%)"}
                />
              </div>
              <div className="flex w-[99%] sm:w-[500px] justify-between ">
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
              <div className="flex w-[90%] sm:w-[400px] justify-between ">
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
          </motion.main>
        ) : (
          <Status />
        )}
      </AnimatePresence>
    );
}

function Game() {
  const { rules, setRules } = useGlobal();
  return (
    <div className="game py-3 relative justify-center items-center flex flex-col h-screen overflow-x-hidden w-screen ">
      <Header />
      <Main />
      <AnimatePresence>{rules && <Rules />}</AnimatePresence>
      <Footer />
    </div>
  );
}

export default Game
