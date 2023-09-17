import React,{useState,useContext} from 'react'
import lizard from "./assets/icon-lizard.svg";
import paper from "./assets/icon-paper.svg";
import { motion } from "framer-motion";
import rock from "./assets/icon-rock.svg";
import spock from "./assets/icon-spock.svg";
import scissors from "./assets/icon-scissors.svg";

const AppContext = React.createContext()
function AppProvider({children}) {
  const [user,setUser] = useState(null);
  const {gin,setGin} = useState('');
  const [rules, setRules] = useState(false);
  const [house, setHouse] = useState('');
  const [msg, setMsg] = useState("");
  const [score, setScore] = useState(5);
 
  return (
    <AppContext.Provider value={{lizard,score,setScore,gin,house,msg,setMsg,setHouse,setGin,paper,rock,spock,scissors, user, setUser, rules, setRules }}>
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () =>{
    return(
        useContext(AppContext)
    )
}

export default AppProvider
