import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Navbar from "./components/navbarComponent/View";
import MessagesPageMobile from "./components/navbarComponent/containers/navbarLinks/messagesPopup/MessagesPageMobile";
import NewPostPopup from "./components/navbarComponent/containers/navbarLinks/newPost/NewPostPopup";
function App() {
  return (
    <Router>
      <div style={{ background: "#001935", height: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/messaging" element={<MessagesPageMobile />} />
          <Route path="/new" element={<NewPostPopup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
