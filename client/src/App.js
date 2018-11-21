import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-map-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SimpleMap from './components/SimpleMap';
import Header from './layouts/header';
import Tabs from './layouts/tabs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grids from './Grids';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Tabs style={{marginBottom: '700px'}}/>
            <Grids />
      </div>
    );
  }
}


export default App;