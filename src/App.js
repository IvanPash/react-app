import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'
import Messages from './components/Dialogs/Dialog/Messages/Messages';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar state={props.state.NavBar}/>
          <div className="main">
            <Route path="/profile" render={() => <Profile />}/> 
            <Route exact path="/dialogs" render={() => <Dialogs state={props.state.DialogsPage}/>} /> 
            <Route path="/messages" render={() => <Messages state={props.state.DialogsPage}/>} /> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;