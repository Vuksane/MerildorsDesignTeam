import React from 'react'
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";

const SectionCard = ({cardData}) => {
  const history = useHistory()
  const {naslovVesti, textVesti}=cardData

  const handleClick = ()=>{
    history.push({
      pathname: '/vest/'+naslovVesti,
    })
  }

    return (
        <Card onClick={()=>handleClick()} className="card-profile card-plain col-md-3" style={{background:'white', margin: "4%", borderRadius:'5px', border:'5px solid #5bc0de', cursor:'pointer', paddingRight: '20px', paddingLeft: '20px'}}>
          <CardBody>
            <div>
              <h4 className="card-category" style={{color:'black'}} >{naslovVesti}</h4>
              <p className="card-description text-justify card-text-shrinked" style={{color:'black'}}>{textVesti}</p>
            </div>
          </CardBody>
        {/* <CardFooter className="text-center">
          <Button className="btn-just-icon btn-neutral" color="black" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-twitter" /></Button>
          <Button className="btn-just-icon btn-neutral ml-1" color="black" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-google-plus" /></Button>
          <Button className="btn-just-icon btn-neutral ml-1" color="link" href="#pablo" onClick={e => e.preventDefault()}><i className="fa fa-linkedin" /></Button>
        </CardFooter> */}
        </Card>
    )
}

export default SectionCard
