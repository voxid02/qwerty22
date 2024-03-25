// style
import "./TripList.css";

import { useState} from "react";
import { UseFetch } from "./hooks/UseFetch";

function TripList() {
 
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const {data: trips , ispending , error} = UseFetch(url)
  


  return (
    
    <div className="trip-list">

       
      <h1>TripList</h1>
      {ispending && <div>Loading </div>}
      {error && <div> {error} </div>}
      <ul>
        {trips && trips.map((trip) => {
          return (
            <li key={trip.title}>
              <h2>{trip.title}</h2>
              <p>{trip.price}</p>
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;