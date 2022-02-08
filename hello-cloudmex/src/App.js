import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import CreateUser from './components/CreateUser'
import ListUser from './components/ListUser'
import './App.css';

function App() {
  return (
    <div>
    <Navigation/>
    <div className='container p-4'>
      <Routes>
        <Route path ='/' element = {<ListUser/>}/>
        <Route path ='/newuser' element = {<CreateUser/>}/>
        <Route path ='/edit/:id' element = {<CreateUser/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
