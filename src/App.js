import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/CarPage';
import Singlecar from './pages/Single-car';
import Error from './pages/ErrorPage';
import Navbar from './components/NavBar'
import Location from './pages/location';


function App() {
  return (
    <>
    <Navbar/>
      <Switch>
       
        <Route exact={true} path="/"   component={Home}/>
        <Route exact path="/home"   component={Home}/>
        <Route exact path="/cars/"   component={Cars}/>
        <Route exact path="/cars/:slug"  component={Singlecar}/>
        <Route exact path="/location" component={Location} />
        <Route component={Error} />
        
      </Switch>
    </>
  );
}

export default App;
