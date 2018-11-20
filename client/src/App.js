import React, { Component } from 'react';
import AppNavBar from './components/navBar';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SimpleMap from './components/SimpleMap';
import Header from './layouts/header';
import Tabs from './layouts/tabs';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Tabs style={{marginBottom: '700px'}}/>
      </div>
    );
  }
}


export default App;