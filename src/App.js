import React, {useState, useEffect} from "react";
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import { BrowserRouter } from 'react-router-dom'
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import {getAllNews} from './services/API';
import DemoFooter from './components/Footers/DemoFooter';
function App() {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState({
    "politika": [],
    "kultura-i-drustvo": [],
    "ekonomija": [],
    "kolumne-i-intervjui": [],
    "vijesti-iz-dijaspore": []
  })

  useEffect(() => {
    getAllNews().then(res => {
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    const test = data.reduce(function (map, obj) {
      map[obj.naslovTeme] = data.filter(el => el.naslovTeme === obj.naslovTeme);
      return map;
    }, {})
    setFilteredData(test)
  }, [data])

  return (<>
    <BrowserRouter>
      <ExamplesNavbar filteredData={filteredData} data={data}/>
      <DemoFooter />
    </BrowserRouter>
  </>);
}
export default App;
