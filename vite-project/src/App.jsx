import { useEffect, useState } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5";
import './App.css'

function App() {
  const [weatherList, setWeatherList] = useState([]);
  useEffect(() => {
    (async () => {
      // 本地端要在web server伺服器上才可執行
      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://marcus-0417.github.io/Weather/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      // console.log(location);
      setWeatherList(location);


      // locationName => 縣市名稱
      // elementName => Wx => 天氣概況
      // elementName => PoP => 降雨機率


    })()
  }, [])




  return (
    <div className="wrap">
      <h2>36小時天氣預報</h2>
      <div className="container">
        {
          weatherList.map((city) => {
            return (
              <div className="item" key={city.locationName}>
                <h3>{city.locationName}</h3>
                <div className="content">
                  {city.weatherElement[0].time.map((time, index) => {
                    
                  })}
                  <div className="item2" key={index}>
                    <p>{}</p>
                    <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00
                    </p>
                    <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                    <p>陰短暫雨</p>
                    <p>{city.weatherElement[0].elementName.Wx}</p>
                    <p>{city.PoP}</p>
                    <p><IoUmbrella size={15} color="blue" />30%</p>
                  </div>


                  <div className="item2">
                    <p>4日</p>
                    <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00
                    </p>
                    <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                    <p>陰短暫雨</p>
                    <p>{city.Wx}</p>
                    <p>{city.PoP}</p>
                    <p><IoUmbrella size={15} color="blue" />30%</p>
                  </div>


                  <div className="item2">
                    <p>4日</p>
                    <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00
                    </p>
                    <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                    <p>陰短暫雨</p>
                    <p>{city.Wx}</p>
                    <p>{city.PoP}</p>
                    <p><IoUmbrella size={15} color="blue" />30%</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div >
    </div >
  )
}
export default App

