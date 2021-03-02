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
    axios
      .get("/product/images")
      .then((response) => {
        this.setState(
          {
            items: response.data.results,
          },
          () => {
            console.log("staaaate", this.state.items[0].photos);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var myImages = [];
    this.state.items.map((item) => {
      myImages.push(item.photos);
    });
    console.log("imaages hee", myImages[0]);
    return (
      <div className="carousel-container">
        <Carousel>
          {myImages.map((item, i) => (
            <Item
              key={i}
              url={
                this.props.currentImage !== ""
                  ? this.props.currentImage
                  : item[0].url
              }
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageGallery;
