import React from "react";
import Button from "@mui/material/Button";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete, onClickStop } = props;

  return (
    <div direction="row" spacing={2} className="incomplete-area">
      <p className="text-1xl font-bold mb-4">未完了のTODO</p>
      <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row mb-3">
                <p className="mr-4">{todo} </p>
                <Button
                  variant="contained"
                  onClick={() => onClickComplete(index)}
                  className="ml-8"
                >
                  完了
                </Button>
                <Button
                  variant="contained"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </Button>
                <Button variant="contained" onClick={() => onClickStop(index)}>
                  中断する
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
