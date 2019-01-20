import React, { Component } from "react";
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import Tooltip from '../components/tooltip';
import MapboxGeocoder from "mapbox-gl-geocoder";
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
      center: [265, 40],
      zoom: 4
    });

    // Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

    // const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
    //   offset: [-120, 0]
    // }).setLngLat([0,0]).addTo(map);
    
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);
    //   tooltip.setLngLat(e.lngLat);
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
                            "coordinates": [-97.1393572, 49.8938452]
                        },
                        "properties": {
                            "title": "Yoga Public",
                            "icon": "bicycle",
                            "address": "280 Fort St, Winnipeg, MB R3C 1E5, Canada",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.80894230000001, 33.5257322]
                        },
                        "properties": {
                            "title": "The Westin Birmingham",
                            "icon": "bicycle",
                            "address": "2221 Richard Arrington Jr Blvd N, Birmingham, AL 35203",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.6726433, 34.718467]
                        },
                        "properties": {
                            "title": "Element Huntsville",
                            "icon": "bicycle",
                            "address": "6810 Governors West NW, Huntsville, Alabama 35806 USA",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.67210130000001, 34.7183521]
                        },
                        "properties": {
                            "title": "The Westin Huntsville",
                            "icon": "bicycle",
                            "address": "6800 Governors W, Huntsville, AL 35806",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.57730630000003, 35.2036601]
                        },
                        "properties": {
                            "title": "Wyndham Flagstaff",
                            "icon": "bicycle",
                            "address": "1900 N Country Club Dr, Flagstaff, AZ 86004",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.96598499999999, 33.6835743]
                        },
                        "properties": {
                            "title": "JW Marriott Phoenix Desert Ridge Resort & Spa",
                            "icon": "bicycle",
                            "address": "5350 E Marriott Dr, Phoenix, AZ 85054",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-112.07306699999998, 33.4517282]
                        },
                        "properties": {
                            "title": "The Westin Phoenix Downtown",
                            "icon": "bicycle",
                            "address": "333 N Central Ave, Phoenix, AZ 85004",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.91753619999997, 33.6451595]
                        },
                        "properties": {
                            "title": "Fairmont Scottsdale Princess",
                            "icon": "bicycle",
                            "address": "7575 E Princess Dr, Scottsdale, AZ 85255",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.89700859999999, 33.6374293]
                        },
                        "properties": {
                            "title": "Scottsdale Marriott At McDowell Mountains",
                            "icon": "bicycle",
                            "address": "16770 N Perimeter Dr, Scottsdale, AZ 85260",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.93300770000002, 33.6248018]
                        },
                        "properties": {
                            "title": "Westin Kierland Resort",
                            "icon": "bicycle",
                            "address": "6902 E Greenway Pkwy, Scottsdale, AZ 85254",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-110.80927610000003, 32.2871568]
                        },
                        "properties": {
                            "title": "Canyon Ranch",
                            "icon": "bicycle",
                            "address": "8600 E Rockcliff Rd, Tucson, AZ 85750",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.92266219999999, 33.807533]
                        },
                        "properties": {
                            "title": "Disney's Grand Californian Hotel & Spa",
                            "icon": "bicycle",
                            "address": "1600 Disneyland Dr, Anaheim, CA 92802",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    }, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.7163501, 33.48269999999999]
                        },
                        "properties": {
                            "title": "Monarch Beach Resort",
                            "icon": "bicycle",
                            "address": "1 Monarch Beach Resort, Dana Point, CA 92629",
                            "description": "this is a bike",
                            "amount": "5"
                        }
                    }, 
                     {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.99573520000001, 33.6538785]
                        },
                        "properties": {
                            "title": "Paséa Hotel & Spa",
                            "icon": "bicycle",
                            "address": "21080 Pacific Coast Hwy, Huntington Beach, CA 92648",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.74842419999999, 33.6574165]
                        },
                        "properties": {
                            "title": "Marriott Irvine Spectrum",
                            "icon": "bicycle",
                            "address": "7905 Irvine Center Dr, Irvine, CA 92618",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.51448170000003, 37.9293142]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "The Village at 1618, Redwood Hwy, Corte Madera, CA 94925",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.41859149999999, 34.0583391]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Westfield, 10250 Santa Monica Blvd Space 1460, Los Angeles, CA 90067",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.25697930000001, 34.050205]
                        },
                        "properties": {
                            "title": "The Standard, Downtown LA",
                            "icon": "bicycle",
                            "address": "550 S Flower St, Los Angeles, CA 90071",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.25622550000003, 34.0522541]
                        },
                        "properties": {
                            "title": "The Westin Bonaventure Hotel & Suites, Los Angeles",
                            "icon": "bicycle",
                            "address": "404 S Figueroa St, Los Angeles, CA 90071",
                            "description": "this is a bike",
                            "amount": "4"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.37376979999999, 33.94467319999999]
                        },
                        "properties": {
                            "title": "The Westin Los Angeles Airport",
                            "icon": "bicycle",
                            "address": "5400 W Century Blvd, Los Angeles, CA 90045",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.37605969999998, 37.6033254]
                        },
                        "properties": {
                            "title": "The Westin San Francisco Airport",
                            "icon": "bicycle",
                            "address": "1 Old Bayshore Hwy, Millbrae, CA 94030",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.27352, 38.245787]
                        },
                        "properties": {
                            "title": "The Meritage Resort and Spa",
                            "icon": "bicycle",
                            "address": "875 Bordeaux Way, Napa, CA 94558",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.873936, 33.618802]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Fashion Island, 401 Newport Center Dr, Newport Beach, CA ",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-117.8787, 33.61609]
                        },
                        "properties": {
                            "title": "Newport Beach Marriott Hotel & Spa",
                            "icon": "bicycle",
                            "address": "900 Newport Center Dr, Newport Beach, CA 92660",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.49376, 34.013633]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "395 Santa Monica Place, #125E, Santa Monica, CA 90401",
                            "description": "this is a bike"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.48151, 34.030418]
                        },
                        "properties": {
                            "title": "The Ambrose Hotel",
                            "icon": "bicycle",
                            "address": "1255 20th St, Santa Monica, CA 90404",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },  {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.81907, 39.186488]
                        },
                        "properties": {
                            "title": "Residences at Little Nell",
                            "icon": "bicycle",
                            "address": "501 E Dean St, Aspen, CO 81611",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.82106, 39.18699]
                        },
                        "properties": {
                            "title": "The St. Regis Aspen Resort",
                            "icon": "bicycle",
                            "address": "315 E Dean St, Aspen, CO 81611",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.52473, 39.633247]
                        },
                        "properties": {
                            "title": "The Westin Riverfront Resort & Spa",
                            "icon": "bicycle",
                            "address": "126 Riverfront Ln, Avon, CO 81620",
                            "description": "this is a bike",
                            "amount": "8"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-105.268511, 40.014152]
                        },
                        "properties": {
                            "title": "Basecamp Boulder",
                            "icon": "bicycle",
                            "address": "2020 Arapahoe Ave, Boulder, CO 80302",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-104.95491, 39.717317]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Shopping Center, 3000 E 1st Ave, Denver, CO 80206",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-104.9959, 39.749153]
                        },
                        "properties": {
                            "title": "The Westin Denver Downtown",
                            "icon": "bicycle",
                            "address": "1672 Lawrence St, Denver, CO 80202",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.37986, 39.642874]
                        },
                        "properties": {
                            "title": "Four Seasons Resort and Residences Vail",
                            "icon": "bicycle",
                            "address": "1, Vail Rd, Vail, CO 81657",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.39168, 39.642769]
                        },
                        "properties": {
                            "title": "Vail Marriott Mountain Resort",
                            "icon": "bicycle",
                            "address": "715 W Lionshead Cir, Vail, CO 81657",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-106.37228, 39.641566]
                        },
                        "properties": {
                            "title": "Vail Mountain Lodge & Spa - Vitality Center",
                            "icon": "bicycle",
                            "address": "352 E Meadow Dr, Vail, CO 81657",
                            "description": "this is a bike",
                            "amount": "5"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.030451, 38.88361]
                        },
                        "properties": {
                            "title": "InterContinental Washington D.C. - The Wharf",
                            "icon": "bicycle",
                            "address": "801 Wharf St SW, Washington, DC 20024",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-118.48151, 34.030418]
                        },
                        "properties": {
                            "title": "Mandarin Oriental, Washington D.C.",
                            "icon": "bicycle",
                            "address": "1330 Maryland Avenue SW, Washington, DC 20024",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.032276, 38.897694]
                        },
                        "properties": {
                            "title": "The Hamilton",
                            "icon": "bicycle",
                            "address": "600 14th St NW, Washington, DC 20005",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.032276, 38.897694]
                        },
                        "properties": {
                            "title": "The Mayflower Hotel",
                            "icon": "bicycle",
                            "address": "1127 Connecticut Ave NW, Washington, DC 20036",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.061704, 38.90322]
                        },
                        "properties": {
                            "title": "The Ritz-Carlton Georgetown, Washington, D.C.",
                            "icon": "bicycle",
                            "address": "3100 South Street NW, Washington, DC 20007",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.046284, 38.905913]
                        },
                        "properties": {
                            "title": "The St. Gregory Hotel Dupont Circle",
                            "icon": "bicycle",
                            "address": "2033 M St NW, Washington, DC 20036",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.051097, 38.90498]
                        },
                        "properties": {
                            "title": "The Westin Georgetown, Washington D.C.",
                            "icon": "bicycle",
                            "address": "2350 M St NW, Washington, DC 20037",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.14, 25.97]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Aventura Mall, 19501 Biscayne Blvd, Aventura, FL 33180",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.102287, 26.369433]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Boca Town Center, 6000 Glades Rd, Boca Raton, FL 33431",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-82.333704, 27.94173]
                        },
                        "properties": {
                            "title": "Courtyard by Marriott Tampa Brandon",
                            "icon": "bicycle",
                            "address": "10152 Palm River Rd, Tampa, FL 33619",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.10379, 26.126709]
                        },
                        "properties": {
                            "title": "The Westin Fort Lauderdale Beach Resort",
                            "icon": "bicycle",
                            "address": "321 N Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33304",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.808073, 24.55863]
                        },
                        "properties": {
                            "title": "Sunset Key Cottages",
                            "icon": "bicycle",
                            "address": "245 Front St, Key West, FL 33040",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.12981709999997, 25.786481]
                        },
                        "properties": {
                            "title": "The Betsy Hotel",
                            "icon": "bicycle",
                            "address": "1440 Ocean Dr, Miami Beach, FL 33139",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.13228149999998, 25.7704335]
                        },
                        "properties": {
                            "title": "Marriott Stanton South Beach",
                            "icon": "bicycle",
                            "address": "161 Ocean Dr, Miami Beach, FL 33139",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.12870470000001, 25.7959418]
                        },
                        "properties": {
                            "title": "The Setai Miami Beach",
                            "icon": "bicycle",
                            "address": "2001 Collins Ave, Miami Beach, FL 33139",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.14908600000001, 25.79175]
                        },
                        "properties": {
                            "title": "The Standard Hotel, Miami Beach",
                            "icon": "bicycle",
                            "address": "40 Island Ave, Miami Beach, FL 33139",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.18877780000003, 25.7685954]
                        },
                        "properties": {
                            "title": "W Miami",
                            "icon": "bicycle",
                            "address": "485 Brickell Ave, Miami, FL 33131",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.12759240000003, 25.7979013]
                        },
                        "properties": {
                            "title": "W South Beach",
                            "icon": "bicycle",
                            "address": "2201 Collins Ave, Miami Beach, FL 33139",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.82133850000002, 26.2519833]
                        },
                        "properties": {
                            "title": "The Ritz-Carlton, Naples",
                            "icon": "bicycle",
                            "address": "280 Vanderbilt Beach Rd, Naples, FL 34108",
                            "description": "this is a bike",
                            "amount": "3"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.55913429999998, 28.3648091]
                        },
                        "properties": {
                            "title": "Walt Disney World Swan Resort",
                            "icon": "bicycle",
                            "address": "1200 Epcot Resorts Blvd, Lake Buena Vista, FL 32830",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.03393419999998, 26.7886624]
                        },
                        "properties": {
                            "title": "Marriott Oceana Palms",
                            "icon": "bicycle",
                            "address": "3200 N Ocean Dr, Riviera Beach, FL 33404",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.32617700000003, 29.8816769]
                        },
                        "properties": {
                            "title": "The Training Loft",
                            "icon": "bicycle",
                            "address": "23 Marion St, St. Augustine, FL 32084",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-82.67035859999999, 27.8859728]
                        },
                        "properties": {
                            "title": "St. Petersburg Marriott Clearwater",
                            "icon": "bicycle",
                            "address": "12600 Roosevelt Blvd N, St. Petersburg, FL 33716",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-82.33138859999997, 27.9404308]
                        },
                        "properties": {
                            "title": "Homewood Suites by Hilton Tampa-Brandon",
                            "icon": "bicycle",
                            "address": "10240 Palm River Rd, Tampa, FL 33619",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-82.56565619999998, 27.9682355]
                        },
                        "properties": {
                            "title": "The Westin Tampa Bay",
                            "icon": "bicycle",
                            "address": "7627 W Courtney Campbell Causeway, Tampa, FL 33607",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.03751190000003, 26.6186795]
                        },
                        "properties": {
                            "title": "Four Seasons Resort Palm Beach",
                            "icon": "bicycle",
                            "address": "2800 S Ocean Blvd, Palm Beach, FL 33480",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.10379, 26.126709]
                        },
                        "properties": {
                            "title": "Four Seasons Hotel Atlanta",
                            "icon": "bicycle",
                            "address": "75 14th St NE, Atlanta, GA 30309",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.36299589999999, 33.8471461]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Lenox Square, 3393 Peachtree Rd NE, Atlanta, GA 30326",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.38270599999998, 33.839913]
                        },
                        "properties": {
                            "title": "The St. Regis Atlanta",
                            "icon": "bicycle",
                            "address": "88, West Paces Ferry Rd NW, Atlanta, GA 30305",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.36529489999998, 33.8481611]
                        },
                        "properties": {
                            "title": "The Westin Buckhead Atlanta",
                            "icon": "bicycle",
                            "address": "3391 Peachtree Rd NE, Atlanta, GA 30326",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.38840199999999, 33.7595348]
                        },
                        "properties": {
                            "title": "The Westin Peachtree Plaza, Atlanta",
                            "icon": "bicycle",
                            "address": "210 Peachtree St NW, Atlanta, GA 30303",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-83.19504210000002, 33.4387517]
                        },
                        "properties": {
                            "title": "The Ritz-Carlton Reynolds, Lake Oconee",
                            "icon": "bicycle",
                            "address": "1 Lake Oconee Trail, Greensboro, GA 30642",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.08531549999998, 32.0833074]
                        },
                        "properties": {
                            "title": "The Westin Savannah Harbor Golf Resort & Spa",
                            "icon": "bicycle",
                            "address": "1 Resort Dr, Savannah, GA 31421",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-159.46860900000001, 22.2228551]
                        },
                        "properties": {
                            "title": "The Westin Princeville Ocean Resort Villas",
                            "icon": "bicycle",
                            "address": "3838 Wyllie Rd, Princeville, HI 96722",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-155.985166, 19.8204426]
                        },
                        "properties": {
                            "title": "Four Seasons Resort Hualalai",
                            "icon": "bicycle",
                            "address": "72-100 Ka'upulehu Drive, Kailua-Kona, HI 96740",
                            "description": "this is a bike",
                            "amount": "3"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-156.44202689999997, 20.6802785]
                        },
                        "properties": {
                            "title": "Four Seasons Resort Maui at Wailea",
                            "icon": "bicycle",
                            "address": "3900 Wailea Alanui Dr, Wailea, HI 96753",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-156.43222119999996, 20.6758097]
                        },
                        "properties": {
                            "title": "Hotel Wailea, Relais & Châteaux",
                            "icon": "bicycle",
                            "address": "555 Kaukahi St Wailea, Kihei, HI 96753",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-156.44292889999997, 20.6874552]
                        },
                        "properties": {
                            "title": "Wailea Beach Resort - Marriott, Maui",
                            "icon": "bicycle",
                            "address": "3700 Wailea Alanui Dr, Wailea, HI 96753",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-158.1257561, 21.3393599]
                        },
                        "properties": {
                            "title": "Four Seasons Resort Oahu at Ko Olina",
                            "icon": "bicycle",
                            "address": "92-1001 Olani St, Kapolei, HI 96707",
                            "description": "this is a bike",
                            "amount": "4"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.62544330000003, 41.8876021]
                        },
                        "properties": {
                            "title": "Club Quarters Hotel, Wacker at Michigan",
                            "icon": "bicycle",
                            "address": "75 E Upper Wacker Dr, Chicago, IL 60601",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.6251633, 41.8993714]
                        },
                        "properties": {
                            "title": "Four Seasons Hotel Chicago",
                            "icon": "bicycle",
                            "address": "120 E Delaware Pl, Chicago, IL 60611",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.61905509999997, 41.8898514]
                        },
                        "properties": {
                            "title": "Loews Chicago Hotel",
                            "icon": "bicycle",
                            "address": "455 N Park Dr, Chicago, IL 60611",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.9537166, 41.8498083]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "69 Oakbrook Center, Oak Brook, IL 60523",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.61948640000003, 41.8890886]
                        },
                        "properties": {
                            "title": "Sheraton Grand Chicago",
                            "icon": "bicycle",
                            "address": "301 E North Water St, Chicago, IL 60611",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.63151729999998, 41.89383279999999]
                        },
                        "properties": {
                            "title": "Studio Three",
                            "icon": "bicycle",
                            "address": "648 N Clark St, Chicago, IL 60654",
                            "description": "this is a bike",
                            "amount": "62"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.62982090000003, 41.8882164]
                        },
                        "properties": {
                            "title": "Westin Chicago River North ",
                            "icon": "bicycle",
                            "address": "320 N Dearborn St, Chicago, IL 60654",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.62390929999998, 41.8994537]
                        },
                        "properties": {
                            "title": "The Westin Michigan Avenue Chicago",
                            "icon": "bicycle",
                            "address": "909 N Michigan Ave, Chicago, IL 60611",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-88.00254330000001, 41.8426218]
                        },
                        "properties": {
                            "title": "The Westin Lombard Yorktown Center",
                            "icon": "bicycle",
                            "address": "70 Yorktown Center, Lombard, IL 60148",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.8615739, 41.9888763]
                        },
                        "properties": {
                            "title": "The Westin O'Hare",
                            "icon": "bicycle",
                            "address": "6100 N River Rd, Rosemont, IL 60018",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.74903760000001, 42.0615141]
                        },
                        "properties": {
                            "title": "Westfield Old Orchard",
                            "icon": "bicycle",
                            "address": "4905 Old Orchard Shopping Center, Skokie, IL 60077",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.91131079, 42.1504909]
                        },
                        "properties": {
                            "title": "Westin Chicago North Shore",
                            "icon": "bicycle",
                            "address": "601 N Milwaukee Ave, Wheeling, IL 60090, USA",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.16358550000001, 39.7664658]
                        },
                        "properties": {
                            "title": "The Westin Indianapolis",
                            "icon": "bicycle",
                            "address": "241 W Washington St, Indianapolis, IN 46204",
                            "description": "this is a bike",
                            "amount": "3"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-90.0675895, 29.9520299]
                        },
                        "properties": {
                            "title": "Sheraton New Orleans Hotel",
                            "icon": "bicycle",
                            "address": "500 Canal St, New Orleans, LA 70130",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.07159790000003, 42.35283639999999]
                        },
                        "properties": {
                            "title": "Taj Boston",
                            "icon": "bicycle",
                            "address": "15 Arlington St, Boston, MA 02116",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.38413539999999, 42.3008066]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "1245 Worcester St, Natick, MA 01760",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.04299809999998, 42.34607889999999]
                        },
                        "properties": {
                            "title": "The Westin Boston Waterfront",
                            "icon": "bicycle",
                            "address": "425 Summer St, Boston, MA 02210",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.07716879999998, 42.3485013]
                        },
                        "properties": {
                            "title": "The Westin Copley Place, Boston",
                            "icon": "bicycle",
                            "address": "10 Huntington Ave, Boston, MA 02116",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.17746199999999, 42.2311997]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "716 Legacy Pl, Dedham, MA 02026",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-71.25985789999999, 42.3948169]
                        },
                        "properties": {
                            "title": "The Westin Waltham Boston",
                            "icon": "bicycle",
                            "address": "70 3rd Ave, Waltham, MA 02451",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.1033893, 39.0166491]
                        },
                        "properties": {
                            "title": "Bethesda Marriott",
                            "icon": "bicycle",
                            "address": "5151 Pooks Hill Rd, Bethesda, MD 20814",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.14507549999996, 39.0242842]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "7101 democracy blvd. bethesda md 20817",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.25634730000002, 43.65885159999999]
                        },
                        "properties": {
                            "title": "The Press Hotel",
                            "icon": "bicycle",
                            "address": "119 Exchange St, Portland, ME 04101",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-83.251688, 42.6054545]
                        },
                        "properties": {
                            "title": "Auburn Hills Marriott Pontiac",
                            "icon": "bicycle",
                            "address": "3600 Centerpoint Pkwy, Pontiac, MI 48341",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-83.18412510000002, 42.56285560000001]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Somerset Collection, 2800 W Big Beaver Rd, Troy, MI 48084",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-83.35656499999999, 42.2081362]
                        },
                        "properties": {
                            "title": "The Westin Detroit Metropolitan Airport",
                            "icon": "bicycle",
                            "address": "2501 Worldgateway Pl, Detroit, MI 48174",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-93.24311169999999, 44.85396069999999]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Mall of America, 1803 South avenue, Floor 1 Lindau Lane &, Ikea Way, Bloomington, MN 55425",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-93.32205139999996, 44.8775928]
                        },
                        "properties": {
                            "title": "The Westin Edina Galleria",
                            "icon": "bicycle",
                            "address": "3201 Galleria, Edina, MN 55435",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-94.5832102, 39.0835626]
                        },
                        "properties": {
                            "title": "The Westin Kansas City at Crown Center",
                            "icon": "bicycle",
                            "address": "1 E Pershing Rd, Kansas City, MO 64108",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-90.20820119999996, 38.6283822]
                        },
                        "properties": {
                            "title": "St. Louis Union Station Hotel, Curio Collection by Hilton",
                            "icon": "bicycle",
                            "address": "1820 Market St, St. Louis, MO 63103",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-90.18410929999999, 32.2960013]
                        },
                        "properties": {
                            "title": "The Westin Jackson",
                            "icon": "bicycle",
                            "address": "407 S Congress St, Jackson, MS 39201",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.84616870000002, 35.22595989999999]
                        },
                        "properties": {
                            "title": "Kimpton Tryon Park Hotel",
                            "icon": "bicycle",
                            "address": "303 S Church St, Charlotte, NC 28202",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.84739769999999, 35.2215512]
                        },
                        "properties": {
                            "title": "The Westin Charlotte",
                            "icon": "bicycle",
                            "address": "601 S College St, Charlotte, NC 28202",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-78.9433477, 35.904052]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "The Streets at Southpoint, 6910, Fayetteville Rd, Durham, NC 27713",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.24376519999998, 36.0994589]
                        },
                        "properties": {
                            "title": "The Kimpton Cardinal",
                            "icon": "bicycle",
                            "address": "401 North Main Street, Winston-Salem, NC 27101",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.03621470000002, 40.7249242]
                        },
                        "properties": {
                            "title": "The Westin Jersey City Newport",
                            "icon": "bicycle",
                            "address": "479 Washington Blvd, Jersey City, NJ 07310",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.07550750000001, 40.9193775]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Westfield Garden State Plaza, 1 Garden State Plaza Blvd, Paramus, NJ 07652",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.36417849999998, 40.7397714]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "The Mall at, 1200 Morris Turnpike, Short Hills, NJ 07078",
                            "description": "this is a bike",
                            "amount": "unkown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-78.87696369999998, 42.89129190000001]
                        },
                        "properties": {
                            "title": "The Westin Buffalo",
                            "icon": "bicycle",
                            "address": "250 Delaware Ave, Buffalo, NY 14202",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.61436939999999, 40.7382095]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "630 Old Country Rd, Garden City, NY 11530",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.674867, 40.7953544]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "The Gate, 1950 Northern Blvd, Manhasset, NY 11030",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.01528239999999, 40.7127168]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Brookfield Place, 230 Vesey St, New York, NY 10281",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9943432, 40.74323599999999]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "140 W 23rd St, New York, NY 10011",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99374740000002, 40.7537712]
                        },
                        "properties": {
                            "title": "Crowne Plaza HY36 Midtown Manhattan",
                            "icon": "bicycle",
                            "address": "320 W 36th St, New York, NY 10018",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97237569999999, 40.7518354]
                        },
                        "properties": {
                            "title": "EVEN Hotels New York - Midtown East",
                            "icon": "bicycle",
                            "address": "221 E 44th St, New York, NY 10017",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.99383499999999, 40.75347]
                        },
                        "properties": {
                            "title": "EVEN Hotels New York - Times Square South",
                            "icon": "bicycle",
                            "address": "321 W 35th St, New York, NY 10001",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98430139999999, 40.7398215]
                        },
                        "properties": {
                            "title": "Freehand New York Hotel",
                            "icon": "bicycle",
                            "address": "23 Lexington Ave, New York, NY 10010",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97978990000001, 40.7625605]
                        },
                        "properties": {
                            "title": "New York Hilton Midtown",
                            "icon": "bicycle",
                            "address": "1335 6th Ave, New York, NY 10019",
                            "description": "this is a bike",
                            "amount": "4"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9593792, 40.7805051]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "1156 Madison Ave, New York, NY 10028",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9943432, 40.74323599999999]
                        },
                        "properties": {
                            "title": "Peloton Studio - The Mothership",
                            "icon": "bicycle",
                            "address": "140 W 23rd St New York, NY 10011",
                            "description": "this is a bike",
                            "amount": "57"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98126400000001, 40.7624962]
                        },
                        "properties": {
                            "title": "Sheraton New York Times Square Hotel",
                            "icon": "bicycle",
                            "address": "811 7th Avenue, W 53rd St, New York, NY 10019",
                            "description": "this is a bike",
                            "amount": "2+"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00670170000001, 40.7111725]
                        },
                        "properties": {
                            "title": "The Beekman Hotel",
                            "icon": "bicycle",
                            "address": "123 Nassau St, New York, NY 10038",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.9754656, 40.7616221]
                        },
                        "properties": {
                            "title": "The Peninsula New York",
                            "icon": "bicycle",
                            "address": "700 5th Ave, New York, NY 10019",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97724069999998, 40.76464079999999]
                        },
                        "properties": {
                            "title": "The Quin Central Park by Hilton Club",
                            "icon": "bicycle",
                            "address": "101 W 57th St, New York, NY 10019",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-74.00811099999999, 40.7409232]
                        },
                        "properties": {
                            "title": "The Standard High Line Hotel",
                            "icon": "bicycle",
                            "address": "848 Washington St, New York, NY 10014",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.97388969999997, 40.7503508]
                        },
                        "properties": {
                            "title": "The Westin New York Grand Central",
                            "icon": "bicycle",
                            "address": "212 E 42nd St, New York, NY 10017",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.98914339999999, 40.7576276]
                        },
                        "properties": {
                            "title": "The Westin New York at Times Square",
                            "icon": "bicycle",
                            "address": "270 W 43rd St, New York, NY 10036",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-73.7585846, 41.0315024]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "125 Westchester Ave, White Plains, NY 10601",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.6944019, 41.4973165]
                        },
                        "properties": {
                            "title": "The Ritz-Carlton, Cleveland",
                            "icon": "bicycle",
                            "address": "1515 W 3rd St, Cleveland, OH 44113",
                            "description": "this is a bike",
                            "amount": "5"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.69611739999999, 41.4805499]
                        },
                        "properties": {
                            "title": "Tremont Athletic Club",
                            "icon": "bicycle",
                            "address": "2306 W 17th St, Cleveland, OH 44113",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-121.04653410000003, 44.1571185]
                        },
                        "properties": {
                            "title": "Brasada Ranch",
                            "icon": "bicycle",
                            "address": "16986 SW Brasada Ranch Rd, Powell Butte, OR 97753",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.68007840000001, 45.5200553]
                        },
                        "properties": {
                            "title": "Dossier Hotel",
                            "icon": "bicycle",
                            "address": "750 SW Alder St, Portland, OR 97205",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-75.390782399999989, 40.0877763]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "160 N Gulph Rd, King of Prussia, PA 19406",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-75.39078239999998, 40.0877763]
                        },
                        "properties": {
                            "title": "The Westin Philadelphia",
                            "icon": "bicycle",
                            "address": "Liberty Place, 99 S 17th St, Philadelphia, PA 19103",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-75.1642956, 39.9514545]
                        },
                        "properties": {
                            "title": "The Ritz-Carlton, Philadelphia",
                            "icon": "bicycle",
                            "address": "10 Ave Of The Arts, Philadelphia, PA 19102",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-79.92995439999999, 32.7814341]
                        },
                        "properties": {
                            "title": "DoubleTree Suites by Hilton Hotel",
                            "icon": "bicycle",
                            "address": "181 Church Street, Historic District, Charleston, SC 29401, United States of America",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-81.00285500000001, 33.99793]
                        },
                        "properties": {
                            "title": "Anytime Fitness",
                            "icon": "bicycle",
                            "address": "2808 Devine St, Columbia, SC 29205",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-82.400803, 34.849446]
                        },
                        "properties": {
                            "title": "The Westin Poinsett, Greenville",
                            "icon": "bicycle",
                            "address": "120 S Main St, Greenville, SC 29601",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-85.3129351, 35.0471256]
                        },
                        "properties": {
                            "title": "The Westin Chattanooga",
                            "icon": "bicycle",
                            "address": "801 Pine St, Chattanooga, TN 37402",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.79708199999999, 36.15287]
                        },
                        "properties": {
                            "title": "Hutton Hotel",
                            "icon": "bicycle",
                            "address": "2506, 1808 West End Ave, Nashville, TN 37203",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.778751, 36.1640057]
                        },
                        "properties": {
                            "title": "Noelle Nashville Hotel",
                            "icon": "bicycle",
                            "address": "200 4th Ave N, Nashville, TN 37219",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.782873, 36.1629719]
                        },
                        "properties": {
                            "title": "Sheraton Grand Nashville Downtown",
                            "icon": "bicycle",
                            "address": "623 Union St, Nashville, TN 37219",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-86.78071360000001, 36.1550507]
                        },
                        "properties": {
                            "title": "The Westin Nashville",
                            "icon": "bicycle",
                            "address": "807 Clark Pl, Nashville, TN 37203",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.72076770000001, 30.4037655]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Domain Northside, 11701 Domain Blvd #164, Austin, TX 78758",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.7466255, 30.2655492]
                        },
                        "properties": {
                            "title": "W Austin",
                            "icon": "bicycle",
                            "address": "200 Lavaca St, Austin, TX 78701",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.72444250000001, 30.3989954]
                        },
                        "properties": {
                            "title": "The Westin Austin at The Domain",
                            "icon": "bicycle",
                            "address": "11301 Domain Dr, Austin, TX 78758",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.74037520000002, 30.266620099999999]
                        },
                        "properties": {
                            "title": "The Westin Austin Downtown",
                            "icon": "bicycle",
                            "address": "310 E 5th St, Austin, TX 78701",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.7780191, 32.8361309]
                        },
                        "properties": {
                            "title": "The Highland Dallas",
                            "icon": "bicycle",
                            "address": "5300 E Mockingbird Ln, Dallas, TX 75206",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.79830709999999, 32.7805577]
                        },
                        "properties": {
                            "title": "The Joule",
                            "icon": "bicycle",
                            "address": "1530 Main St, Dallas, TX 75201",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.80734640000003, 32.7976202]
                        },
                        "properties": {
                            "title": "Le Méridien Dallas, The Stoneleigh",
                            "icon": "bicycle",
                            "address": "2927 Maple Ave, Dallas, TX 75201",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.7735103, 32.8681798]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "8687 N Central Expy, Dallas, TX 75225",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.84139399999998, 33.0917032]
                        },
                        "properties": {
                            "title": "The Westin Stonebriar Hotel & Golf Club",
                            "icon": "bicycle",
                            "address": "1549 Legacy Dr, Frisco, TX 75034",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-95.46344699999997, 29.737432]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "The Galleria, 5135 W Alabama St, Houston, TX 77056",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },   {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-80.10379, 26.126709]
                        },
                        "properties": {
                            "title": "The Westin Houston, Memorial City",
                            "icon": "bicycle",
                            "address": "945 Gessner Rd, Houston, TX 77024",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.00930779999999, 32.9173531]
                        },
                        "properties": {
                            "title": "The Westin Dallas Fort Worth Airport",
                            "icon": "bicycle",
                            "address": "4545 W. John Carpenter Freeway, Irving, TX 75063",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.82576449999999, 33.0838057]
                        },
                        "properties": {
                            "title": "Legacy West",
                            "icon": "bicycle",
                            "address": "5908 Headquarters Dr, Plano, TX 75024",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-95.45738649999998, 30.1601546]
                        },
                        "properties": {
                            "title": "The Westin at The Woodlands",
                            "icon": "bicycle",
                            "address": "2 Waterway Square Pl, The Woodlands, TX 77380",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-111.49120249999999, 40.62292840000001]
                        },
                        "properties": {
                            "title": "Stein Eriksen Residences",
                            "icon": "bicycle",
                            "address": "6702 Stein Circle, Park City, UT 84060",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.51760730000001, 37.6043391]
                        },
                        "properties": {
                            "title": "The Westin Richmond",
                            "icon": "bicycle",
                            "address": "6631 W Broad St, Richmond, VA 23230",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-77.21950959999998, 38.91805259999999]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "Tysons Corner Center, 1961 Chain Bridge Rd, McLean, VA 22102",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.20374520000001, 47.61651310000001]
                        },
                        "properties": {
                            "title": "Peloton Showroom",
                            "icon": "bicycle",
                            "address": "106 Bellevue Square, Bellevue, WA 98004",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.2008179, 47.6164494]
                        },
                        "properties": {
                            "title": "The Westin Bellevue",
                            "icon": "bicycle",
                            "address": "600 Bellevue Way NE, Bellevue, WA 98004",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.33674350000001, 47.61430550000001]
                        },
                        "properties": {
                            "title": "Hotel Max",
                            "icon": "bicycle",
                            "address": "620 Stewart St, Seattle, WA 98101",
                            "description": "this is a bike",
                            "amount": "1"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.29217549999998, 47.5899472]
                        },
                        "properties": {
                            "title": "Ridge Fitness",
                            "icon": "bicycle",
                            "address": "1414 31st Ave S #103, Seattle, WA 98144",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-122.33812999999998, 47.6136913]
                        },
                        "properties": {
                            "title": "The Westin Seattle",
                            "icon": "bicycle",
                            "address": "1900 5th Ave, Seattle, WA 98101",
                            "description": "this is a bike",
                            "amount": "unknown"
                        }
                    },      {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-87.90198750000002, 43.03727910000001]
                        },
                        "properties": {
                            "title": "The Westin Milwaukee ",
                            "icon": "bicycle",
                            "address": "550 N Van Buren St, Milwaukee, WI 53202",
                            "description": "this is a bike",
                            "amount": "2"
                        }
                    },   
                ]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                // "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        });
    });

        

  
     // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'points', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = ("<b>" + e.features[0].properties.title + "</b> <br>" + e.features[0].properties.address);

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
