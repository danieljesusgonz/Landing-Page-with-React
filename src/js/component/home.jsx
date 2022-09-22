import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card.jsx";
import { Footer } from "./footer";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col ">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <Card />
          </div> 
		  <div className="col-lg-3 col-md-4">
            <Card />
          </div>
		  <div className="col-lg-3 col-md-4">
            <Card />
          </div>
		  <div className="col-lg-3 col-md-4">
            <Card />
          </div>
        </div>
      </div>
	  <Footer/>
    </>
  );
};

export default Home;
