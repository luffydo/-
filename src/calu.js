import { useState } from "react";
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
export default function Calu() {
    const [numWait, setNumWait] = useState(0);
    const [numFinal, setNumFinal] = useState(0);

    async function click(){
        setNumWait(numWait=>numWait+1);
        await delay(3000);
        setNumFinal(numFinal=>numFinal+1);
        setNumWait(numWait=>numWait-1);
    }
    return (
        <>
        <h1>等待：{numWait}</h1>
        <h2>完成：{numFinal}</h2>
       
        <button onClick={click}> 购买 </button>
        </>
    )
}