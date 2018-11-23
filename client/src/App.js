import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tabs from './layouts/tabs';
import Time from './components/time';
import LP from './components/lp';
import NavBar from './layouts/navBar';
import Hello from './components/hello';
import About from './components/about';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';



class App extends Component {
  render() {
    return (
    <div className="Appp">

      <NavBar/>
      <Tabs style={{marginBottom: '1700px'}}/>


{/*Home Page/ Landing Page/ Map Tab Page */}
      <BrowserRouter>
        <Route path='/home' component={LP}/>
      </BrowserRouter>


{/*Time Tab Page  */}
      <BrowserRouter>
        <Route path='/time' component={Time}/>
      </BrowserRouter>


{/*Hello Tab Page  */} 
      <BrowserRouter>
        <Route path='/hello' component={Hello}/>
      </BrowserRouter>


{/*About Drawer Page  */} 
      <BrowserRouter>
        <Route path='/about' component={About}/>
      </BrowserRouter>
      
      </div>
    );
  }
}


export default App;