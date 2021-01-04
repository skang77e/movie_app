import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:slug" component={Detail}/>
  </BrowserRouter>
}

export default App;