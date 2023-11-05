import React, { useRef, useState } from "react";
import {Delete} from '@mui/icons-material'

export default function TodoApp() {
  const [section, setSection] = useState([]);
  const [inputText, setInputText] = useState("");
  const ref = useRef();

  const handleTaskEnter = (e) => {
    if (e.key === "Enter") {
      handleList();
    }
  };

  const handleList = () => {
    const trimmedText = inputText.trim();

    if (trimmedText !== "") {
      setSection([...section, trimmedText]);
      setInputText("");
      ref.current.value = "";
    }
  };

  const handleComplete = (index) => {
    const li = document.getElementsByClassName("list")[index];
    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  };

  const handleDelete = (index) => {
    const anotherSection = [...section];
    anotherSection.splice(index, 1);
    setSection(anotherSection);
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="input">
          <h2>To-Do List</h2>
          <input
            type="text"
            ref={ref}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleTaskEnter}
          />
          <button className="todoAdd" onClick={() => handleList()}>
            Add
          </button>
        </div>
        <div className="task-container">
          {section.length > 0 &&
            section.map((sectionText, index) => (
              <ul className="tasks" key={index}>
                <li className="list" onClick={() => handleComplete(index)}>
                  {sectionText}
                </li>
                <button className="dlt-btn" onClick={() => handleDelete(index)}>
                  <Delete/>
                </button>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}
