import React from "react";
import axios from "axios";
import GeneralInformation from "./GeneralInformation.jsx";
import ImageGallery from "./ImageGallery.jsx";
import ThumbnailsImages from "./ThumbnailsImages.jsx";
import StyleSelector from "./StyleSelector.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: [],
      result: [],
      currentImage: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/product/images")
      .then((response) => {
        this.setState(
          {
            items: response.data.results,
          },
          () => {}
        );
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/reviews/rating")
      .then((response) => {
        this.setState({
          result: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick(event) {
    this.setState(
      {
        currentImage: event.target.src,
      },
      () => {}
    );

    return this.state.currentImage;
  }
  render() {
    return (
      <div className="ext-cont">
        <div className="int-cont">
          <div className="gallery-cont">
            <ThumbnailsImages changeImage={this.handleClick} />
          </div>
          <div className="trick"></div>
          <div id="img-cont">
            <ImageGallery currentImage={this.state.currentImage} />
          </div>
          <div id="general-cont">
            <div id="general-inf-cont">
              <GeneralInformation result={this.state.result} />
            </div>
            <div id="third">
              <StyleSelector styles={this.state.items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
