import React from 'react'
import './styles/styles.css';
import Navbar from './components/navbarComponent/View'
import MessagesPageMobile from './components/navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile'
function App() {
  return (
    <div style={{background:"#001935",height:"100vh"}}>
      <Navbar />
    </div>
  );
}

export default App;
