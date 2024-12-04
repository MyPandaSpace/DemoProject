import { useEffect } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5"
function App() {
  useEffect(() => {
    (async () => {
      const data = await axios.get('https://mypandaspace.github.io/DemoProject/F-C0032-001.json')
      const { locations } = data.data.cwbopendata.dataset;
      console.log(locations)

      // locationName => 縣市名稱
      // elementName => 天氣狀況
      // elementName => PoP => 降雨機率
    })()
  },[])
  return (
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* {一列兩欄} */}
        <div className="row">
          {/* 第一欄 */}
          <div className="col">
            {/* 卡片 */}
            <div className="card"></div>
            {/* 標題 */}
            <div className="title">台北市</div>
            {/* 內容 */}
            <div className="content">
              {/* 一列三欄 */}
              <div className="row2">
                {/* 第一欄 */}
                <div className="col2">
                  <p>2日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
                {/* 第二欄 */}
                <div className="col2">
                  <p>3日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
                {/* 第三欄 */}
                <div className="col2">
                  <p>4日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
              </div>
            </div>
          </div>
          {/* 第二欄 */}
          <div className="col">
            {/* 卡片 */}
            <div className="card"></div>
            {/* 標題 */}
            <div className="title">台北市</div>
            {/* 內容 */}
            <div className="content">
              {/* 一列三欄 */}
              <div className="row2">
                {/* 第一欄 */}
                <div className="col2">
                  <p>2日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
                {/* 第二欄 */}
                <div className="col2">
                  <p>3日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
                {/* 第三欄 */}
                <div className="col2">
                  <p>4日</p>
                  <p>上午6:00<br />~<br />下午6:00</p>
                  <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p>
                  <p>晴時多雲</p>
                  <p><IoUmbrella />10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
