import React, { useState, useEffect } from "react";

// import axios
import axios from "axios";

// import icons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

//  59c95e2a8ba980228214295e5a73678d

const APIkey = "59c95e2a8ba980228214295e5a73678d";

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Bucharest");

  // Fetch the data
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  // console.log(data)

  // if data is false show the loader
  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }

  // set the icon according to ther weather
  let icon;
  console.log(data.weather[0].main);


  switch(data.weather[0].main) {
    case 'Cloud':
      icon = <IoMdCloudy/>;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill/>;
      break;
    case 'Rain':
      icon = <IoMdRainy/>;
      break;
    case 'Clear':
      icon = <IoMdSunny/>;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill/>;
      break;
    case 'Snow':
      icon = <IoMdSnow/>;
      break;
    case 'Thunderstom ':
      icon = <IoMdThunderstorm/>;
      break;
  }

  // date object
  const date = new Date();
  

  return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center
      flex flex-col items-center justify-center px-4 lg:px-0">
      {/* Form */}
      <form>form</form>
      {/* Card */}
      <div className="w-full max- w-[450px] bg-black/20 min-h-[584px] text-white 
      backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        <div>
          {/* Card Top */}
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div className="text-[87px]">{icon}</div>
            <div>
              {/* country name */}
              <div className="text-[26px] font-semibold">{data.name}, {data.sys.country}</div>
              {/* Date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()} 
              </div>
            </div>
          </div>
          {/* Card Body */}
          <div>Card Body</div>
          {/* Card Bottom */}
          <div>Card Bottom</div>
        </div>
      </div>
    </div>
  );
};

export default App;
