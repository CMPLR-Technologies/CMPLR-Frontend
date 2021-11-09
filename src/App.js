import React  from 'react'
import './styles/styles.css';
import LoginView from './components/loginComponent/View';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/login" element={<LoginView />} />
          </Routes>
      </Router>
  );
}

export default App;
