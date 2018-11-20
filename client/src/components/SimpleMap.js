import React, { Container, Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
static defaultProps = {
    center: {
        lat: 17.6291116,
        lng: -63.2319666
    },
    zoom: 11
};

render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '95%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCn6BVePE04Mrv4F6fuick3ac_lhFed7L8' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={17.6291116}
                    lng={-63.2319666}
                    text={'Camrone Hassell'}
                    />
            </GoogleMapReact>>
        </div>
        );
    }
}

export default SimpleMap;