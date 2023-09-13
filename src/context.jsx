import React,{useState,useContext} from 'react'
import lizard from "./assets/icon-lizard.svg";
import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
import spock from "./assets/icon-spock.svg";
import scissors from "./assets/icon-scissors.svg";
const AppContext = React.createContext()
function AppProvider({children}) {
  const [user,setUser] = useState(null)
  const [rules, setRules] = useState(false);
  return (
    <AppContext.Provider value={{lizard,paper,rock,spock,scissors, user, setUser, rules, setRules }}>
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
