import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
    )
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      })
     
  };

  return (
    <>
     <div className="d-flex justify-content-center align-items-center md-5 h-screen "
     style={{background: "linear-gradient(to right, #89cff0, #6a5acd)",height:"100vh"}} >
     
    <div className="row justify-content-center" 
    style={{backgroundImage: "url('https://i.pinimg.com/1200x/3c/fd/3f/3cfd3fa04ddf16dd65a7df5f4496271d.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",height:"80vh",width:"140vh" ,display: "flex", boxShadow: "0 4px 20px rgba(0,0,0,0.2)",borderRadius: "10px",}}>
     <div className='d-flex justify-content-center align-items-center' style={{ flex: 4, padding: "20px", background: "" }}>  <h3 style={{position:"fixed",top:"100px", left:"300px"}}>WEATHER 🌦️</h3>
      
         {weather && weather.main && (
          <div className=" text-center mt-3 justify-content-center align-items-center">
            <h1>{weather.weather[0].main} </h1> 
            <p>{weather.weather[0].description}</p>
            <h2>{weather.main.temp}C</h2>
            <div className=" d-flex justify-content-between">
              <div style={{marginTop:"130px"}}>
                <h6 className="fw-bold">Humidity : {weather.main.humidity} %</h6>
                <h6 className="fw-bold">Clouds : {weather.clouds.all} %</h6>
              </div> 
              <div style={{marginTop:"130px", paddingLeft:"20px"}}>
                 <h6 className="fw-bold">Wind : {weather.wind.speed} m/s</h6>                
                  <h6 className="fw-bold">Coordinates : {weather.coord.lat} - {weather.coord.lon}</h6>
              </div>
            </div>
          </div>
        )} 
        
    </div>

   
    <div className=' p-5  text-center' style={{ flex: 2, padding: "20px", background: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.5)",borderRadius: "10px" }}>
         <input 
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter your place"
              className=" form-control me-2 text-center " 
            />
            <button onClick={fetchWeather} className="m-4  text-align-center btn btn-outline-danger">
                Search
            </button>
  <hr />
 <h5> Weather Details :</h5>
     {weather && weather.main ? (
  <div>
    <p>Humidity: {weather.main.humidity} %</p>
    <p>Clouds: {weather.clouds.all} %</p>
    <p>Wind: {weather.wind.speed} m/s</p>
    <p>Coordinates: {weather.coord.lat} - {weather.coord.lon}</p>
  </div>
) : (
  <p>Enter a city and click Search to see details.</p>
)}
  </div>
     </div>
     </div>
    </>
  ); 
} 

export default App;
