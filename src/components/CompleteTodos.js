import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickDelete} = props;

  return (
    <Stack direction="row" spacing={2} className="complete-area">
      <p className="text-1xl font-bold">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo}</p>
              <Button variant="contained" onClick={() => onClickBack(index)}>
                戻す
              </Button>
              <Button variant="contained" onClick={() => onClickDelete(index)}>
                削除
              </Button>
            </div>
          );
        })}
      </ul>
    </Stack>
  );
};
