import React, { Component } from "react";
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import Tooltip from '../components/tooltip';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJvb2tlLW1pdGNoZWxsIiwiYSI6ImNqcXRuZm94dDBhazE0Mm4wY3BiNDdxaHEifQ.5cW4ovdm3QLHkzawfS44Dg';



class MapComp extends Component {
//   state = {
//     // user begins as logged in
//     loggedIn: false
//   }

  tooltipContainer;
  
  setTooltip(features) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          Tooltip, {
            features
          }
        ),
        this.tooltipContainer
      );
    } else {
      this.tooltipContainer.innerHTML = '';
    }
  }

//   handleLogin = (event) => {
//     event.preventDefault();
//     console.log("login clicked");
//     axios.post("/login", {
//       username: 'admin',
//       password: 'password'
//     })
//       .then((response) => {
//         console.log(response);
//         this.setState({loggedIn: true, username: response.data.username})
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//     // this.setState({loggedIn: true})
//   }
  componentDidMount() {

    console.log("componentDidMount lifecycle method ran!");
    // axios.get("/allusers")
    //   .then(response =>{console.log(response)});

    // check session data to see if user is already logged in
    // axios.get("/user_data")
    // .then(response => { 
    //   console.log(response);
    // if(response.data.loggedIn) {
    //   this.setState({loggedIn: true, username: response.data.username})
    // } else {
    //   console.log("no logged in user");
    // } });

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div');
  
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [0, 43.65],
      zoom: 0
    });

    // Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-120, 0]
    }).setLngLat([0,0]).addTo(map);
    
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      tooltip.setLngLat(e.lngLat);
      map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      this.setTooltip(features);
    });

    
    map.on('load', function () {

        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.03238901390978, 38.913188059745586]
                        },
                        "properties": {
                            "title": "here's a bike!",
                            "icon": "bicycle",
                            "description": "this is a bike"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.414, 37.776]
                        },
                        "properties": {
                            "title": "here's a bike!",
                            "icon": "bicycle",
                            "description": "this is a bike"

                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "text-anchor": "top"
            }
        });
        
    });
     // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'points', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = (e.features[0].properties.title + "<br>" + e.features[0].properties.description);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
  }
  
  render() {
    // let banner = this.state.loggedIn ? "Whoa! You're logged in!" : "UNAUTHORIZED USER!!!";

    return (
      <div className="App">
      {/* MAP */}
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      {/* <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
        {!this.state.loggedIn ?
          (<button onClick={this.handleLogin}> Log In </button>) : ""}
        </p> */}
      </div>
    );
  }
}

export default MapComp;
