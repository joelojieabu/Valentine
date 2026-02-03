import { useState } from "react";
import ValentineApp from "./Valentine";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <ValentineApp />;
}

export default App;
