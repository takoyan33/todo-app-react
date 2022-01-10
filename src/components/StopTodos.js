import React from "react";
import Button from "@mui/material/Button";


export const StopTodos = (props) => {
  const { todos, onClickStopBack } = props;

  return (
    <div direction="row" spacing={2} className="stop-area">
      <p className="text-1xl font-bold">中断したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row mb-3">
              <p className="mr-4">{todo} </p>
              <Button
                variant="contained"
                onClick={() => onClickStopBack(index)}
              >
                戻す
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
