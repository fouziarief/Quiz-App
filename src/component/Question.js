import React, { useState, useEffect } from "react";

function Question({ question, setQuestion, setStop, data }) {
  const [quiz, setQuiz] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [className, setClassName] = useState("ans");

  useEffect(() => {
    if (question - 1 === data.length) {
      setStop(true);
    }
    setQuiz(data[question - 1]);
  }, [data, question]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswer = (a) => {
    setAnswer(a);
    setClassName("ans active");

    delay(2000, () => {
      setClassName(a.result ? "ans correct" : "ans wrong ");
    });
    delay(4000, () => {
      if (a.result) {
        setQuestion((previous) => previous + 1);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="question">
      <div className="qHeader">
        <p>{quiz?.question}</p>
      </div>
      <div className="option">
        {quiz?.answer.map((a, index) => {
          return (
            <button
              className={answer === a ? className : "ans"}
              key={index}
              onClick={() => handleAnswer(a)}
            >
              {a.option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
