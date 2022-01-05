import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const CompleteTodos = (props: props) => {
  const { todos, onClickBack } = props;

  return (
    <Stack direction="row" spacing={2} className="complete-area">
      <p className="text-1xl font-bold">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo} </p>
              <Button variant="contained" onClick={() => onClickBack(index)}>
                戻す
              </Button>
            </div>
          );
        })}
      </ul>
    </Stack>
  );
};
