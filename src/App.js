
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Technologies from "./Technologies"
// import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
