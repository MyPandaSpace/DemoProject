import { useEffect } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5"
import './App.css'
function App() {
  const [weatherList, setWeatherList] = useState([])
  useEffect(() => {
    (async () => {
      const data = await axios.get('https://mypandaspace.github.io/DemoProject/F-C0032-001.json')
      const { location } = data.data.cwbopendata.dataset
      setWeatherList(location)
      console.log(location)

      // locationName => 縣市名稱
      // elementName => Wx => 天氣狀況
      // elementName => PoP => 降雨機率
    })()
  }, [])
  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="container">
          {
            weatherList.map((city) => {
              return (
                <div className="item" key={city.locationName}>
                  <h3>{city.locationName}</h3>
                  <div className="content">
                    <div className="item2">
                      <p>4日</p>
                      <p>
                        上午6:00<br />
                        ~<br />
                        下午6:00
                      </p>
                      <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                      <p>陰短陣雨</p>
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
        </div>
      </div>
    </>
  )
}

export default App
