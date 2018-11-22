import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layouts/header';
import Tabs from './layouts/tabs';
import Landing from './components/landingPage';
import { Container, Row, Col } from 'reactstrap';
import LP from './components/lp';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Tabs style={{marginBottom: '700px'}}/>
        <LP/>        
      </div>
    );
  }
}


export default App;