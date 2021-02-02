import React, { Component } from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardColumns
} from 'reactstrap';
import {Link,NavLink} from "react-router-dom";
import Gallery from "./Gallery.js";


export default class ListOfArticle extends Component {

constructor(props){
  super(props)
  this.state = {
    hasErrors: false,
    planets: [],
    article: null,
    images: []
  };
  this.showDetails.bind(this)
  this.goBack.bind(this)
}

showDetails(item){
  this.setState({article:item})

}

goBack() {
  this.setState({article:null})
}

componentDidMount() {

fetch("http://localhost:3030/selected-articles/"+this.props.category+"/"+this.props.city)
.then(res => res.json())
.then(res => this.setState({ planets: res }))
.catch(() => this.setState({ hasErrors: true }));
}
render() {

return (
<>

<CardColumns>
{this.state.article==null ? this.state.planets.map((item) => {
  let iii = this.state.images;
  iii.splice(0,iii.length)
  const blabla = "/articles/"+item.category+"/"+item.city+"/"+item.id
  return(
<div  key={item.id} className="paddingArticlesCards">

  <Card id="aboutPicture">
    <CardBody style={{

         backgroundImage: "url(data:image/jpeg;base64," + item.articleImage + ")",
         backgroundSize:"cover",
         backgroundRepeat:"no-repeat"
       }} >
      <CardText className="text-white">NAME: {item.name}</CardText>
      <CardText className="text-white">CATEGORY: {item.category}</CardText>
      <CardText className="text-white">CITY: {item.city}</CardText>
      <CardText className="text-white">MODEL: {item.model}</CardText>
      <CardText className="text-white">PRICE: {item.price}</CardText>
      <CardText className="text-white">DESCRIPTION: {item.description}</CardText>
      <CardText className="text-white">DATE OF CREATION : {item.dateOfCreation}</CardText>

      <Button

      className="btn-round mr-1 blurred_glass_quick_message box"
      variant="light"
      onClick={e => {this.showDetails(item)}}
      >
      Open

      </Button>

    </CardBody>
  </Card>
</div>)
}) :

<>

<Gallery images={this.state.images}/>
  <Card id="aboutPicture" >

  <CardBody  className=" blurred_glass" >



  <CardText className="text-white">NAME: {this.state.article.name}</CardText>
  <CardText className="text-white">CATEGORY: {this.state.article.category}</CardText>
  <CardText className="text-white">CITY:   {this.state.article.city}</CardText>
  <CardText className="text-white">MODEL: {this.state.article.model}</CardText>
  <CardText className="text-white">PRICE:   {this.state.article.price}</CardText>
  <CardText className="text-white">DESCRIPTION: {this.state.article.description}</CardText>
  <CardText className="text-white">DATE OF CREATION : {this.state.article.dateOfCreation}</CardText>
  {  this.state.article.articleImages.map((item) => {
    let iii = this.state.images;
    iii.push({original : "data:image/jpeg;base64,"+item.image, thumbnail : "data:image/jpeg;base64,"+item.image})
    })}
    <Button
    className="btn-round mr-1 blurred_glass_quick_message box"
    variant="light"
    onClick={e => {this.goBack()}}
    >
    Back
    </Button>
  </CardBody>

</Card>
</>
}

</CardColumns>
</>

);
}
}
