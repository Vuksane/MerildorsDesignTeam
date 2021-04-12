import React,{useEffect,useState} from 'react'
import { Container, Row, } from "reactstrap";
import SectionCard from './SectionCard'

const Section = ({data,title, img}) => {
    const [lastThreePost, setLastThreePost]=useState([])

    useEffect(() => {
        const sortedDataByDate=data.sort((a,b)=>{
          if(a.datumVesti && b.datumVesti){
            return new Date(b.datumVesti) - new Date (a.datumVesti)
          }
          if(a.datumVesti){
            return -1
          }
          if(b.datumVesti){
            return 1
          }
          else{
            return null
          }
        })

        const slicedData=sortedDataByDate.slice(0,3)
        setLastThreePost(slicedData)

      
    }, [data])
    // const {naslovTeme,naslovVesti,textVesti}=data
    return (
        <div className="section section-dark text-center" style={{
            backgroundImage: "url(" + require(`assets/img${img}`) + ")",
            backgroundSize: 'cover',
            overflow: 'hidden',
            margin: "2em",
            border: '10px solid #5bc0de',
          }}>
            <Container style={{ paddingTop: 70 }}>
              <div className="title-brand">
                <h1 className="presentation-title2">{title}</h1>
              </div>
              <Row>
                <div className="firstDiv" >
                  {lastThreePost.map(el=><SectionCard key={el.datumVesti} cardData={el}/>)} 
                </div>
              </Row>
            </Container>
          </div>
    )
}

export default Section
