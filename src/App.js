import './App.css';
import FlexTest from './components/FlexTest';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MainBody from './components/MainBody';
import Grid from './components/Grid';
import Footer from './components/Footer';

function App() {
  return (
    <div className='pageContainer'>
      <NavBar />
      <MainBody />
      <SideBar /> 
      <Footer />
    </div>
  );
}

export default App;
