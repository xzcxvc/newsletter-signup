import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#36384D] w-screen min-h-screen flex items-center justify-center">
      <div className="container bg-white p-6 rounded-[40px] w-6/12 flex items-center justify-center">
        <div className="w-7/12 px-8 py-16">
          <h1 className="font-bold text-5xl">Stay updated!</h1>
        </div>
        <div className="border-2 w-5/12">2</div>
        {/* <Button
          name="buttonSubscribe"
          label="Subscribe to monthly newsletter"
        /> */}
      </div>
    </div>
  );
}

export default App;
