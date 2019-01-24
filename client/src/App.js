import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapComp from "./pages/Map";
import Home from "./pages/Home";

import SignIn from "./pages/SignIn";

import ReactDOM from 'react-dom'
import axios from "axios";
import "./App.css";
import mapboxgl from 'mapbox-gl';
import Tooltip from './components/tooltip';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJvb2tlLW1pdGNoZWxsIiwiYSI6ImNqcXRuZm94dDBhazE0Mm4wY3BiNDdxaHEifQ.5cW4ovdm3QLHkzawfS44Dg';



// class App extends Component {
//   state = {
//     // user begins as logged in
//     loggedIn: false
//   }

//   tooltipContainer;
  
//   setTooltip(features) {
//     if (features.length) {
//       ReactDOM.render(
//         React.createElement(
//           Tooltip, {
//             features
//           }
//         ),
//         this.tooltipContainer
//       );
//     } else {
//       this.tooltipContainer.innerHTML = '';
//     }
//   }

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
//   componentDidMount() {

//     console.log("componentDidMount lifecycle method ran!");
//     // axios.get("/allusers")
//     //   .then(response =>{console.log(response)});

//     // check session data to see if user is already logged in
//     axios.get("/user_data")
//     .then(response => { 
//       console.log(response);
//     if(response.data.loggedIn) {
//       this.setState({loggedIn: true, username: response.data.username})
//     } else {
//       console.log("no logged in user");
//     } });

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
  
//   render() {
//     let banner = this.state.loggedIn ? "Whoa! You're logged in!" : "UNAUTHORIZED USER!!!";

//     return (
//       <div className="App">
//       {/* MAP */}
//         <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
//       <h1>{banner}</h1>
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>

//         </div>
//         <p className="App-intro">
//         {!this.state.loggedIn ?
//           (<button onClick={this.handleLogin}> Log In </button>) : ""}
//         </p>
//       </div>
//     );
//   }
// }

// export default App;



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapComp} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;