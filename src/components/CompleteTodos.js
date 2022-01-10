import React from "react";
import Button from "@mui/material/Button";

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickDeletecomplete } = props;

  return (
    <>
      <div direction="row" spacing={2} className="complete-area">
        <p className="text-1xl font-bold mb-4">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row mb-3">
                <p className="mr-4">{todo}</p>
                <Button variant="contained" onClick={() => onClickBack(index)}>
                  戻す
                </Button>
                <Button
                  variant="contained"
                  onClick={() => onClickDeletecomplete(index)}
                >
                  削除
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
