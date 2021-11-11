import React from "react";
import "./styles/styles.css";
import MainRoutes from "./components/routes/Routes";
import UserContextProvider from "./contexts/userContext/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <MainRoutes />
      </UserContextProvider>
    </div>
  );
}

export default App;
