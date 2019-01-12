import React, { Component } from "react";
import ReactDOM from 'react-dom'
import axios from "axios";



class SignIn extends Component {
  state = {
    // user begins as logged in
    loggedIn: false
  }


  handleLogin = (event) => {
    event.preventDefault();
    console.log("login clicked");
    axios.post("/login", {
      username: 'admin',
      password: 'password'
    })
      .then((response) => {
        console.log(response);
        this.setState({loggedIn: true, username: response.data.username})
      })
      .catch(function (error) {
        console.log(error);
      })
    // this.setState({loggedIn: true})
  }
  componentDidMount() {

    console.log("componentDidMount lifecycle method ran!");
    // axios.get("/allusers")
    //   .then(response =>{console.log(response)});

    // check session data to see if user is already logged in
    axios.get("/user_data")
    .then(response => { 
      console.log(response);
    if(response.data.loggedIn) {
      this.setState({loggedIn: true, username: response.data.username})
    } else {
      console.log("no logged in user");
    } });
  }
//     // Container to put React generated content in.
//     this.tooltipContainer = document.createElement('div');
  
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [0, 43.65],
//       zoom: 12.5
//     });

//     const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
//       offset: [-120, 0]
//     }).setLngLat([0,0]).addTo(map);
    
//     map.on('mousemove', (e) => {
//       const features = map.queryRenderedFeatures(e.point);
//       tooltip.setLngLat(e.lngLat);
//       map.getCanvas().style.cursor = features.length ? 'pointer' : '';
//       this.setTooltip(features);
//     });
//   }
  
  render() {
    let banner = this.state.loggedIn ? "Whoa! You're logged in!" : "UNAUTHORIZED USER!!!";

    return (
      <div className="App">
      <h1>{banner}</h1>
        <div className="App-header">
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
        {!this.state.loggedIn ?
          (<button onClick={this.handleLogin}> Log In </button>) : ""}
        </p>
      </div>
    );
  }
}

export default SignIn;
