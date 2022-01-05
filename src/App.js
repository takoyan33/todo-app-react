import React, { useState } from "react";
import "./App.css";
import "./index.css";
import InputTodo from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { About } from "./About.js";

export const App = () => {
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </head>;
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([""]);
  const [completeTodos, setCompleteTodos] = useState([""]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">TodoList</Link>
              </Typography>
              <Button color="inherit">
                <Link to="/about">About</Link>
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            {/* <Route exact path="/">
            <App />
          </Route> */}

            <div className="">
              <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={incompleteTodos.length >= 5}
              />
              {incompleteTodos.length >= 5 && (
                <p className="text-red-400">登録できるtodoは5個までです。 </p>
              )}
              <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
              />

              <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
            </div>
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
