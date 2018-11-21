import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layouts/header';
import Tabs from './layouts/tabs';
import Landing from './components/landingPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Tabs style={{marginBottom: '700px'}}/>
          <Landing/>
      </div>
    );
  }
}


export default App;