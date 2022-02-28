import React, { useEffect } from "react";

function SideMenu({ question, setQuestion, setEarned, setStop }) {
  const moneyList = [
    { id: 1, amount: "$ 500" },
    { id: 2, amount: "$ 1000" },
    { id: 3, amount: "$ 2000" },
    { id: 4, amount: "$ 5000" },
    { id: 5, amount: "$ 10000" },
    { id: 6, amount: "$ 20000" },
    { id: 7, amount: "$ 30000" },
    { id: 8, amount: "$ 40000" },
    { id: 9, amount: "$ 50000" },
    { id: 10, amount: "$ 60000" },
    { id: 11, amount: "$ 70000" },
    { id: 12, amount: "$ 80000" },
    { id: 13, amount: "$ 90000" },
    { id: 14, amount: "$ 1000000" },
  ];
  useEffect(() => {
    question > 1 &&
      setEarned(moneyList.find((m) => m.id === question - 1).amount);
  }, [moneyList, question, setStop]);
  return (
    <div className="sideMenu">
      <ul className="moneyList">
        {moneyList.map((list) => (
          <li
            key={list.id}
            className={question === list.id ? "list active" : "list"}
          >
            {list.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
