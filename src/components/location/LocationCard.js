import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./kennel.jpg")} alt="Kennel" />
        </picture>
        <h3>
          Kennel: <span className="card-kennelename">
            {props.location.name}
          </span>
        </h3>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        {props.hasUser
        ? <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Discharge</button>
        : null}
      </div>
    </div>
  );
};

export default LocationCard;