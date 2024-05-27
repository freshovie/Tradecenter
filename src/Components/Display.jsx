// Importing React and necessary components
import React from "react";
import { Hero, Brands, HowItWorks, Choose, Community, Featured, Subscribe} from "./Pages"; // Importing page components
// import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router, // Importing Router from react-router-dom
  Route, // Importing Route from react-router-dom
  Switch, // Importing Switch from react-router-dom
} from "react-router-dom/cjs/react-router-dom.min";


// Defining the Display component
const Display = () => {
  return (
    <React.Fragment>
      {/* Main container */}
      <div className="display">
        {/* Router component to enable routing */}
        <Router>
          {/* Nested container for page content */}
          <div className="display">
            {/* Uncomment the following line to include a Navbar */}
            {/* <Navbar /> */}
            {/* Rendering page components */}
            <Hero /> {/* Hero section */}
            <Brands /> {/* Brands section */}
            <HowItWorks /> {/* How it Works section */}
            <Choose /> {/* Choose section */}
            <Community />
            <Featured />
            <Subscribe />
            <Footer />
            {/* Switch component to handle routing */}
            <div className="content">
              <Switch>
                {/* Route for the default path */}
                <Route exact path="/"></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
};

// Exporting the Display component
export default Display;
