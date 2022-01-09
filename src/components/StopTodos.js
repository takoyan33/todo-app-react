import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const StopTodos = (props) => {
  const { todos, onClickStopBack } = props;

  return (
    <Stack direction="row" spacing={2} className="stop-area">
      <p className="text-1xl font-bold">中断したTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <p>{todo} </p>
              <br></br>
              <Button
                variant="contained"
                onClick={() => onClickStopBack(index)}
              >
                戻す
              </Button>
            </div>
          );
        })}
      </ul>
    </Stack>
  );
};
