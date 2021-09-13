
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'

// import Technologies from "./Technologies"
// import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar />
          <div className="main">
            <Route path="/profile" component={Profile} /> 
            <Route path="/dialogs" component={Dialogs} /> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
