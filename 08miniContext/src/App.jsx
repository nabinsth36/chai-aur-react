import { useState } from "react";

import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-green-800 text-4xl">context API in React wih Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
