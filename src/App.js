import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import Messages from './components/Dialogs/Dialog/Messages/Messages';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Navbar state={props.store.getState().NavBar}/>
          <div className="main">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/> 
            <Route exact path="/dialogs" render={() => <Dialogs state={props.store.getState().DialogsPage}/>} /> 
            <Route path="/users" render={() => <UsersContainer/>} /> 
            <Route path="/messages" render={() => <Messages state={props.store.getState().DialogsPage}/>} /> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;