import "./App.css";
import React, { useState } from "react";
import Main from "./component/Main";
import SideMenu from "./component/SideMenu";
import Question from "./component/Question";
import data from "./component/image/data";
import User from "./component/User";

function App() {
  const [userName, setUserName] = useState("");
  const [question, setQuestion] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0$");

  return (
    <div className="app">
      {!userName ? (
        <User setUserName={setUserName} />
      ) : (
        <div className="container">
          {stop ? (
            question - 1 === data.length ? (
              <div className="bcg-winner">
                <p className="winner">Congratulation You Won {earned} </p>
              </div>
            ) : (
              <div className="bcg">
                <p className="messg">You have Earned {earned}</p>
                <button
                  className="replay"
                  onClick={() => window.location.reload(false)}
                >
                  Play Again
                </button>
              </div>
            )
          ) : (
            <>
              <Main setStop={setStop} question={question} />
              <SideMenu
                question={question}
                setQuestion={setQuestion}
                setEarned={setEarned}
                setStop={setStop}
              />
              <Question
                setQuestion={setQuestion}
                data={data}
                question={question}
                setStop={setStop}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
