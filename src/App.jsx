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
        <div className="w-7/12 ">
          <div className="px-10 py-16 flex flex-col gap-4">
            <h1 className="font-bold text-[64px]">Stay updated!</h1>
            <p className="text-[20px]">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="text-[20px]">
              <li>• Product discovery and building what matters</li>
              <li>• Measuring to ensure updates are a success</li>
              <li>• And much more!</li>
            </ul>

            <Button
              name="buttonSubscribe"
              label="Subscribe to monthly newsletter"
            />
          </div>
        </div>
        <div className="border-2 w-5/12">2</div>
      </div>
    </div>
  );
}

export default App;
