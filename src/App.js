import React, { useState } from "react";
import InputArea from "./components/inputArea";
import ToDoItem from "./components/toDoItem";

function App() {

  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevItems) => {
      return [item, ...prevItems]
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((val, i) => {
        return i !== id;
      });
    })
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea
        addItem={addItem} />

      <div>
        <ul>
          {items.map((item, i) =>
            <ToDoItem
              key={i}
              id={i}
              item={item}
              onChecked={deleteItem} />)}
        </ul>
      </div>

    </div>
  );
}

export default App;
