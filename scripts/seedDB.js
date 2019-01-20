const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the Users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/peloshare"
);

const userSeed = [
  {
    username: "admin",
    password: "password",
  },
  {
    username: "brooke",
    password: "password",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });





const bikeSeed = [

  {
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
        }, 
    ]
    }
}
]

db.Bike
  .remove({})
  .then(() => db.User.collection.insertMany(bikeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
