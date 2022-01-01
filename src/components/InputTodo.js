import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const InputTodo = (props)=> {
const { todoText, onChange, onClick, disabled } = props;

// const style = {
//   width: '400px',
//   height: '50px',
//   borderRadius: '8px',
//   padding: '8px',
//   margin: '8px', 
// }
  return(
    <Stack  direction="row" className="input-area" >
    <input 
     disabled ={disabled}
      placeholder="TODOを入力"
      value= {todoText}
      onChange= {onChange}
    />
    <Button disabled ={disabled} onClick={onClick}  variant="contained">追加</Button>
  </Stack>
  );
};


export default InputTodo;