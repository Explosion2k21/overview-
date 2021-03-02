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
      currentStyle: "",
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.renderStyle = this.renderStyle.bind(this);
  }
  renderStyle() {
    if (this.state.items[this.state.index] === undefined) {
      return (
        <h4 id="style">
          {"STYLE > "} <label>waiting...</label>{" "}
        </h4>
      );
    } else {
      return (
        <h4 id="style">
          {"STYLE > "}
          <label id="style-selector-label">
            {" "}
            {this.state.items[this.state.index].name}{" "}
          </label>
        </h4>
      );
    }
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

  changeStyle(event) {
    this.setState({
      currentStyle: event.target.getAttribute("name"),
      index: event.target.getAttribute("index"),
    });
  }

  render() {
    console.log("whats the problem exactly", this.state.items);
    return (
      <div className="ext-cont">
        <div className="int-cont">
          <div className="gallery-cont">
            <ThumbnailsImages
              index={this.state.index}
              changeImage={this.handleClick}
            />
          </div>
          <div className="trick"></div>
          <div id="img-cont">
            <ImageGallery
              index={this.state.index}
              currentImage={this.state.currentImage}
            />
          </div>
          <div id="general-cont">
            <div id="general-inf-cont">
              <GeneralInformation result={this.state.result} />
            </div>
            <div id="third">
              <div className="style-holder">
                {this.renderStyle()}
                <StyleSelector
                  changeStyle={this.changeStyle}
                  styles={this.state.items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
