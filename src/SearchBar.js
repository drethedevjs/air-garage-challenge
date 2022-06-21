import React, {useState} from "react";
import axios from 'axios'
import Result from './Result'

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
  headers: { 
    'Authorization': 'mytoken', // Add bearer token!
   }
})

function SearchBar() {
  
  const [parkingLotResults, setParkingLotResults] = useState([]);
  const [region, setRegion] = useState([]);
  
  function handleGetYelpResults (event)
  {
    event.preventDefault();
   
    api.get(`search?location=${region}&radius=20000&categories=Parking&limit=50&term=parkinggarage`).then(res =>
      {
        setParkingLotResults(res.data.businesses);
        console.log("data results", res.data.businesses);
        console.log("Variable results", parkingLotResults);
      });
   }
    
    
  function handleUpdateRegion (event)
  {
    event.preventDefault();
    setRegion(event.target.value);
  }

  return (
    <>
        <form>
          <div className="row">
            <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="region" className="form-label">Find Parking Lots</label>
                  <input onChange={handleUpdateRegion} type="text" className="form-control" id="region" />
                  <button onClick={handleGetYelpResults} className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
         </form>

         {parkingLotResults?.map(lot => {
            return <Result info={lot} />
          })}
      </>
  );
}

export default SearchBar;
