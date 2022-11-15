
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import LoggedIn from './components/LoggedIn/LoggedIn';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<LoggedIn />} />
      </Routes>
      
      
    <Footer />
    </div>
  );
}

export default App;
