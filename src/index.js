import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/data";
import { GameProvider } from "./context/game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <GameProvider>
        <App />
      </GameProvider>
    </Provider>
  </React.StrictMode>
);
