import { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useCallback } from "react";

function App() {
  const [pswd, setPswd] = useState("");
  const [inclNum, setInclNum] = useState(false);
  const [inclChar, setInclChar] = useState(false);
  const [pLength, setPLength] = useState(8);

  const rangeVal = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let Numbers = "1234567890";
    let passtr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let splChars = "@#$&*!";

    if (inclNum) {
      passtr += Numbers;
    } 
    if (inclChar) {
      passtr += splChars;
    }

    for (let i = 0; i <= pLength; i++) {
      let index = Math.floor(Math.random() * passtr.length);
      let selChar = passtr[index];
      pass += selChar;
    }

    setPswd(pass);
  }, [inclNum, inclChar, pLength, setPswd]);

  useEffect(() => {
    passwordGenerator();
  }, [inclNum, inclChar, pLength, setPswd]);

  return (
    <>
      <div className="container-fluid justify-content-center">
        <div className="row p-3 text-center">
          <h4 className="text-white">Password Generator</h4>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-5 col-sm-6 col-10 rounded rounded-2">
            <input
              className="form-control w-75 d-inline-block mb-3"
              value={pswd}
              readOnly
              type="text"
            />
            <button className="btn btn-light ms-2">Copy</button>
            <input
              type="range"
              value={pLength}
              min={8}
              max={20}
              onChange={(e) => {setPLength(e.target.value)}}
            />
            <input
              className="ms-2"
              onChange={() => {
                setInclNum((prev) => !prev);
              }}
              type="checkbox"
            />
            <label className="text-white ms-1">Numbers</label>
            <input
              className="ms-2"
              onChange={() => {
                setInclChar((prev) => !prev);
              }}
              type="checkbox"
            />
            <label className="text-white ms-1">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
