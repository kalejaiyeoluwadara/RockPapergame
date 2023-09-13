import React from 'react'
import { Select } from './game';
import { useGlobal } from './context';
function Status() {
  const { lizard, paper, rock, spock, scissors,user } = useGlobal();
  return (
    <>
      <main className="relative py-8 px-4 flex justify-between items-center  h-[400px] w-[90%] ">
        <div className="flex flex-col justify-center items-center ">
          <Select img={scissors} color={"hsl(39, 89%, 49%)"} />
          <p className="uppercase text-white tracking-[0.1em] font-[500] text-[14px] mt-3  ">
            You Picked
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Select img={rock} color={"hsl(189, 58%, 57%)"} />
          <p className="uppercase text-white tracking-[0.1em] font-[600] text-[14px] mt-3  ">
            The house picked
          </p>
        </div>
      </main>
      <div className="flex flex-col items-center justify-center mb-4 gap-2">
        <h1 className=" text-[50px] uppercase text-white font-[700] ">
          You win
        </h1>
        <button className="w-[300px] text-[20px] bg-white rounded-md uppercase font-[600] shadow-md  py-3 ">
          Play again
        </button>
      </div>
    </>
  );
}

export default Status
