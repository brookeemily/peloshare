import React from "react";
import "../../styles/style.css"

function Homepage() {
  return (
    <div
      style={{paddingTop: "120px", textAlign: "center"}} 
      className="overlay"
      >

        <h1 className="display-1">Peloshare</h1><br/>
        <hr/>
        <div
      style={{paddingTop: "30px", textAlign: "center"}} 
      className="textOverlay"
      >
      <span className="h6">The Peloton Bike: the only exercise bike streaming <br/> indoor cycling classes to your home live and on-demand.
     </span>
     <br/><br/>
     <span className="h6">The Peloton was created for you, wherever you are. <br/>What if you aren't home? Don't worry. <br/>We believe that home is where the bike is.
     </span>
     
     
     <br/><br/>
 <a href="/map" className="h6 btn-danger">find your fix</a><br/><br/>
    {/* <a href="/map" className="h6 btn-danger">submit location</a>  */}
    </div>
    </div>
  );
}

export default Homepage;
