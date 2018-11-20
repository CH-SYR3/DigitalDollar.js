import React, { Component } from 'react';
import AppNavBar from './components/navBar';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SimpleMap from './components/SimpleMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <SimpleMap/>
      </div>
    );
  }
}


export default App;