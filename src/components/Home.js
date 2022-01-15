import { auth } from "../firebase";
import { useHistory, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import React, { useState } from "react";
import "../App.css";
import "../index.css";
import Stack from "@mui/material/Stack";
import InputTodo from "./InputTodo";
import { IncompleteTodos } from "./IncompleteTodos";
import { CompleteTodos } from "./CompleteTodos";
import { StopTodos } from "./StopTodos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { About } from "../About.js";

const Home = () => {
  const history = useHistory();
  const { user } = useAuthContext();
  const handleLogout = () => {
    auth.signOut();
    history.push("/login");
  };
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "掃除をする",
    "課題をする",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "朝ごはんを作る",
    "早起きする",
  ]);

  const [stopTodos, setStopTodos] = useState(["お風呂掃除をする"]);

  //inputの文字を取得
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //タスクの追加
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  //未完了のタスクの削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //完了のタスクの削除
  const onClickDeletecomplete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };
  //未完了から完了に移動
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  //完了から未完了に移動
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  //未完了から中断に移動
  const onClickStop = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newStopTodos = [...stopTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setStopTodos(newStopTodos);
  };

  //中断から未完了に移動
  const onClickStopBack = (index) => {
    const newStopTodos = [...stopTodos];
    newStopTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, stopTodos[index]];
    setStopTodos(newStopTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return (
      <BrowserRouter className="marign0">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">TodoList</Link>
              </Typography>
              <Button color="inherit">
                <Link to="/about">About</Link>
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                ログアウト
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <div className="">
              <Stack direction="row" className="input-area">
                <p>
                  未完了・ 完了・中断にそれぞれ最大5個までタスクを入れられます。
                </p>
              </Stack>
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
                onClickStop={onClickStop}
              />
              <CompleteTodos
                todos={completeTodos}
                onClickDeletecomplete={onClickDeletecomplete}
                onClickBack={onClickBack}
              />
              <StopTodos todos={stopTodos} onClickStopBack={onClickStopBack} />
            </div>
          </Switch>
        </Box>
      </BrowserRouter>
    );
  }
};

export default Home;
