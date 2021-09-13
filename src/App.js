import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar state={props.state.NavBar}/>
          <div className="main">
            <Route path="/profile" render={() => <Profile state={props.state.ProfilePage}/>} /> 
            <Route path="/dialogs" render={() => <Dialogs state={props.state.DialogsPage}/>} /> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;