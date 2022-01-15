import React from "react";
import { BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


export const App = () => {
  <head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </head>;
  return (
    <>
      <AuthProvider>
        <div style={{ margin: "2em" }}>
          <BrowserRouter>
            <PrivateRoute exact path="/" component={Home} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute path="/login" component={Login} />
          </BrowserRouter>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
