import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item.jsx";
import axios from "axios";
import ThumbnailsImages from "./ThumbnailsImages.jsx";
class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    // getting the images using an axios request from the api
    axios
      .get("http://159.65.127.126:3002/overview/images")
      .then((response) => {
        this.setState({
          //setting the state to hold the array that contains the images urls
          items: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    var myImages = [];
    this.state.items.map((item) => {
      myImages.push(item.photos);
    });
    console.log("imaages hee", myImages[this.props.index]);
    return (
      <div className="carousel-container">
        <Carousel>
          {myImages.map((item, i) => (
            <Item
              key={i}
              url={
                this.props.currentImage !== ""
                  ? this.props.currentImage
                  : item[this.props.index || 0].url
              }
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageGallery;
