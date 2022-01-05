import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <Stack direction="row" spacing={2} className="incomplete-area">
      <p className="text-1xl font-bold">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo} </p>
              <Button
                variant="contained"
                onClick={() => onClickComplete(index)}
              >
                完了
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
