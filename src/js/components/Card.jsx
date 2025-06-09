import React from "react";
import image from "../../img/rigo-baby.jpg";

const Card = () => (
  <div className="col-md-3">
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Cardtitle</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, assumenda. Optio dicta sed officiis nemo illo corporis, ratione dignissimos voluptas.</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Find Out More</a>
      </div>
    </div>
  </div>
);

export default Card;
