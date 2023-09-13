
import { useGlobal } from "./context"
// const { lizard, paper, rock, user, spock, scissors } = useGlobal();
export const slots = [{scissors:{
    choice:"scissors",
     img:scissors,
     color:"hsl(39, 89%, 49%)"
},},
   {spock: {
        choice:"spock",
        img: spock,
        color: "hsl(189, 58%, 57%)",
    }},
   {paper:{
         choice:"paper",
         img:paper,
         color:"hsl(230, 89%, 62%)",
    }},{lizard:{
        choice:"lizard",
        img:lizard,
        color:"hsl(261, 73%, 60%)",
    },},
    {rock:{
        choice:"rock",
        img:rock,
        color:"hsl(349, 71%, 52%)",
    }}

]