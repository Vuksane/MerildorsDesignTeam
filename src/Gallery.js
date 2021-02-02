import React, {useState} from "react";
import ImageGallery from 'react-image-gallery';

class Gallery extends React.Component {


constructor(props){
  super(props)
}
  render() {

    return (
      <ImageGallery items={this.props.images} />

    );
  }

}
export default Gallery;
