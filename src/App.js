import React from "react";
import { BrowserRouter as HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Userfront from "@userfront/react";
import HomePage from './pages/HomePage'

export default function App() {

Userfront.init("8nw5y4yn");

const SignupForm = Userfront.build({
  toolId: "alaadkb"
});

const LoginForm = Userfront.build({
  toolId: "mlnnrkn"
});

const LogoutButton = Userfront.build({
  toolId: "oraamno"
});

  return (
    <HashRouter>

        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li><button onClick={Userfront.logout}>Logout</button></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup"
           element={<SignUp />}>  
          </Route>
          <Route path="/login"
           element={<Login/>}>
          </Route>
          <Route path="/dashboard"
            element={<Dashboard />}>
          </Route>
        </Routes>

    </HashRouter>
  );

function SignUp() {
  return (
    <div>
      <h2>Sign up</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function Dashboard() {
  function renderFn() {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <Navigate
          to={{
            pathname: "/login",
          }}
        />
      );
    }
    // If the user is logged in, show the dashboard
    // const userData = JSON.stringify(Userfront.user, null, 2);
    return (
      <HomePage />
    );
  }

  return renderFn();
}

 }

