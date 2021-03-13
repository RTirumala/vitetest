import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("theme-light");

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-nba  text-white">header</div>
      <div className="h-full bg-primary">
        Body
        <div className="grid-flow-row space-x-2 p-6">
          <button
            className="bg-gray-400 rounded-md py-2 px-4"
            onClick={() => setCurrentTheme("theme-dark")}
          >
            Dark Theme
          </button>
          <button
            className="bg-gray-400 rounded-md py-2 px-4"
            onClick={() => setCurrentTheme("theme-light")}
          >
            Light Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
