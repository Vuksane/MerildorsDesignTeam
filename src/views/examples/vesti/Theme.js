import React, {useState, useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AllCards from "./AllCards";

// Klasa Politika
export default function Theme(props) {
  const location = useLocation()
  const [news, setNews] = useState([])
  const [politikaNews, setPolitikaNews] = useState([])

  useEffect(() => {
    const title = location.pathname.substring(1)
    setNews(props[title]?props[title]:[])
  }, [location, props])

  useEffect(() => {
    const sortedDataByDate=news.sort((a,b)=>{
      if(a.datumVesti && b.datumVesti){
        return new Date(b.datumVesti) - new Date (a.datumVesti)
      }
      if(b.datumVesti){
        return -1
      }
      if(a.datumVesti){
        return 1
      }
      else{
        return null
      }
    })
    setPolitikaNews(sortedDataByDate)
  }, [news])

  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const podaci = {
    "politika" :
    {
        background: "/plavidvoraccetinje.jpg",
        heading: "Politika"
    },
    "kultura-i-drustvo" : {
        background: "/muzej.jpg",
        heading: "Kultura i drustvo"
    },
    "ekonomija" :
    {
        background: "/manastir.jpg",
        heading: "Ekonomija"
    },
    "kolumne-i-intervjui" :
    {
        background: "/bridge.jpg",
        heading: "Kolumne i Intervjui"
    },
    "vijesti-iz-dijaspore" :
    {
        background: "/daniel-olahs.jpg",
        heading: "Vijesti iz dijaspore"
    }
}

  return (
    <>
      
      <div className="main">
        <div
          className="section section-dark text-center"
          style={{
            backgroundImage:
              "url(" + require("assets/img"+podaci[location.pathname.substring(1)].background) + ")",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row style={{paddingTop: '200px'}}>
              <div className="firstDiv">
                {politikaNews.map(el=><AllCards key={Math.random()} cardData={el}/>)} 
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
