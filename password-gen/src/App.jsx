import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { IoIosDoneAll } from "react-icons/io";

function App() {
  const [pLength, setPLength] = useState(8);
  const [inclNumbers, setInclNumbers] = useState(false);
  const [inclChars, setInclChars] = useState(false);
  const [password, setPassword] = useState("");
  const [copyState, setCopyState] = useState(false);

  // Use callback Hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passtr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (inclNumbers) {
      passtr += "1234567890";
    }
    if (inclChars) {
      passtr += "@#$&*!";
    }

    for (let i = 1; i <= pLength; i++) {
      let indexNum = Math.floor(Math.random() * passtr.length);
      pass += passtr[indexNum];
    }

    setPassword(pass);
    setCopyState(false)
    
  }, [pLength, inclChars, inclNumbers, setPassword]);


  // UseEffect Hook
  useEffect(() => {passwordGenerator()}, [pLength, inclChars, inclNumbers, passwordGenerator]);


  // useRef Hook
  const passRef = useRef(null);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    setCopyState(true)
    passRef.current?.select();
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 font-normal my-8 py-5 text-blue-50 bg-gray-600">
        <h1 className="text-2xl font-normal text-center text-white p-2">
          Password Generator
        </h1>

        <div className="flex rounded-lg shadow overflow-hidden mb-4">
          <input
            value={password}
            ref={passRef}
            readOnly
            placeholder="Password"
            className="outline-none w-full rounded p-2 my-6 text-black"
            type="text"
          />
          <button onClick={copyToClipboard}
          className="p-1 ml-2 bg-blue-800 h-12 self-center rounded px-3 hover:bg-gray-700">
             {copyState && 'Copied'}
             {!copyState && 'Copy'}
              
              
          </button>
        </div>

        <div className="flex text-sm gap-x-2  ">
          <div className="flex items-center p-2 bg-slate-700 rounded  gap-x-1">
            <input 
            type="range"
            min={8}
            max={20}
            value={pLength}
            onChange={(e) => {setPLength(e.target.value)}}
            className="cursor-pointer border border-black" 
            />
            <label > Length: {pLength} </label>
          </div>
          <div className="flex items-center  gap-x-1">
            <input type="checkbox" defaultChecked = {inclNumbers} onChange={() => {setInclNumbers((prev) => !prev)}} className="ml-2 " />
            <label > Numbers </label>
            
            <input type="checkbox" defaultChecked = {inclChars} onChange={() => {setInclChars((prev) => !prev )}} className="ml-2" />
            <label > Special Chars </label>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
