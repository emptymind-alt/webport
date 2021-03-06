import React from 'react';
import web from "../src/images/mm5.jpg";
import { NavLink } from 'react-router-dom';

 const Card = (props)=> {
   return (
     <>
     
        <div className = "col-md-4 col-10 mx-auto">
          <div className= "card-container">
         <div className="card">
  <img className="card-img-top img-fluid"  src={props.imgsrc} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href ={props.link} className="btn btn-primary">Take  a Tour</a>
  </div>
</div>
</div>
                        </div>
                       
     </>
   );
 };

export default Card;