import React, { Component } from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardColumns
} from 'reactstrap';
import {Link,NavLink} from "react-router-dom";


export default class ArticleDetails extends Component {

constructor(props){
  super(props)
}


state = {
hasErrors: false,
article: null
};
componentDidMount() {
fetch("http://localhost:3030/selected-articles/"+this.props.match.params.category+"/"+this.props.match.params.city+"/"+this.props.match.params.id)
.then(res => res.json())
.then(res => this.setState({ article: res }))
.catch(() => this.setState({ hasErrors: true }));
}
render() {
return (
  <>

<CardColumns>

<div className="paddingArticlesCards">

  <Card id="aboutPicture">
    <CardImg/>
    <CardBody  className=" blurred_glass">

      <CardText className="text-white">NAME: {this.state.article.name}</CardText>
      <CardText className="text-white">CATEGORY: {this.state.article.category}</CardText>
      <CardText className="text-white">CITY: {this.state.article.city}</CardText>
      <CardText className="text-white">MODEL: {this.state.article.model}</CardText>
      <CardText className="text-white">PRICE: {this.state.article.price}</CardText>
      <CardText className="text-white">DESCRIPTION: {this.state.article.description}</CardText>
      <CardText className="text-white">DATE OF CREATION : {this.state.article.dateOfCreation}</CardText>
    </CardBody>

  </Card>
</div>

</CardColumns>
</>
);
}
}
