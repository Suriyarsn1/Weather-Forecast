//Import Files

import Axios from "axios";
import { useState } from "react";
import imge from "./images/bg.avif";
import cloud from './images/cloudy.png'
import sunny from './images/sunny.png'
import rain from './images/rain.png'
import snow from './images/snow.png'
import Home from "./componet/Home";

//Main Function

function App(props) {
  const [place, setPlace] = useState("N/A")
  const [wind, setwind] = useState("N/A")
  const [humidity, setHumidity] = useState("N/A")
  const [temp, setTemp] = useState("N/A")
  const [input, setInput] = useState()
  const [images, setImages] = useState(imge)
  const [emogis, setEmogis] = useState("")

  function getinput(e) {
    setInput(e.target.value)
  }
  // Submit Function

  const handlevalue = () => {

    //Called API

    const data = Axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=31e10c393cc1624767ede99b74a22117`)
    data.then((userdata) => {
      setPlace(userdata.data.name)
      setwind(userdata.data.wind.speed)
      setHumidity(userdata.data.main.humidity)
      setTemp(Math.floor(userdata.data.main.temp - 273) + "°C")

      //Assign Weather Condition and Display Images

      if (userdata.data.weather[0].main === "Clouds") {
        setImages(cloud)
        setEmogis("☁️")
      }
      else if (userdata.data.weather[0].main === "Clear") {
        setImages(sunny)
        setEmogis("☀️")
      }
      else if (userdata.data.weather[0].main === "Rain") {
        setImages(rain)
        setEmogis("☔")
      }
      else if (userdata.data.weather[0].main === "Snow") {
        setImages(snow)
        setEmogis("☃️")
      }
      else {
        setImages(images)
      }
    }).catch(function () {
      alert("Invalid Name")
      setInput("")
    })
  }
  return (<>
    <Home place={place} images={images} getinput={getinput} wind={wind} humidity={humidity} temp={temp} emogis={emogis} handlevalue={handlevalue} ></Home>
  </>
  );
}
export default App;
