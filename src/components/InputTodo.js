import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <Stack direction="row" className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <Button disabled={disabled} onClick={onClick} variant="contained">
        追加
      </Button>
    </Stack>
  );
};

export default InputTodo;
