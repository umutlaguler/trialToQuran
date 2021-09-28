import React, { Component } from 'react';
import {View,Text, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

const screenWidth = Dimensions.get("window").width;
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE =  36.993973;
const LONGITUDE =35.310351;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyA8XGpw_fiNULa4CcnkzCAgg4J5STrNuzs';

class mapPage extends Component {

    constructor(props) {
        super(props);
    
    this.state = {
        coordinates: [
          {
            latitude:  36.993973,
            longitude: 35.310351,
          },
          {
            latitude:36.993608,
            longitude:35.311605,
          },
          {
            latitude:36.993608,
            longitude:35.311605,
          },
          {
            latitude:36.992932,
            longitude:35.313354,
          },
          {
            latitude: 36.994680,
            longitude: 35.313998,
          },
  
        ],
      };
      this.mapView = null;
}
onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }
  render() {
    return (    
         <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c}
          onPress={this.onMapPress}
        >
          {/* <Polyline 
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000'
          ]}
          strokeWidth={6}
           coordinates={[
            {
              latitude:  36.993973,
              longitude: 35.310351,
            },
            {
              latitude:36.993608,
              longitude:35.311605,
            },
            {
              latitude:36.993608,
              longitude:35.311605,
            },
            {
              latitude:36.992932,
              longitude:35.313354,
            },
            {
              latitude: 36.994680,
              longitude: 35.313998,
            },
          ]}
          /> */}
          {this.state.coordinates.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
          )}
          {/* {(this.state.coordinates.length >= 2) && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
              destination={this.state.coordinates[this.state.coordinates.length-1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)
  
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 20),
                    bottom: (height / 20),
                    left: (width / 20),
                    top: (height / 20),
                  }
                });
              }}
              onError={(errorMessage) => {
                //console.log('GOT AN ERROR',errorMessage);
              }}
            />
          )} */}
        </MapView> 
      );
   } 
}

const styles = StyleSheet.create({
  //if we need it 

});


export default mapPage;