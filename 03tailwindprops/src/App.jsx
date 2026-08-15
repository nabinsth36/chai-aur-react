import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-center">Tailwind test</h1>
      <Card username="Nabin" btnText="Click Me" />
      <Card username="Hitesh" btnText="Visit Here" />
      <Card username="Raman" btnText />
    </>
  );
}

export default App;
