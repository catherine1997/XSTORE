
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import LoggedIn from './components/LoggedIn/LoggedIn';
import Homepage from './components/Homepage/Homepage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<LoggedIn />} />
      </Routes>
      <Homepage />
      
    <Footer />
    </div>
  );
}

export default App;
