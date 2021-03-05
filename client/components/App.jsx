import React from "react";
import axios from "axios";
import GeneralInformation from "./GeneralInformation.jsx";
import ImageGallery from "./ImageGallery.jsx";
import ThumbnailsImages from "./ThumbnailsImages.jsx";
import StyleSelector from "./StyleSelector.jsx";
import SizeAndQuantity from "./SizeAndQuantity.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: [],
      result: [],
      currentImage: "",
      index: 0,
      skus: 0,
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
    // getting the array that containst the images of the product from the api with an axios call
    axios
      .get("http://159.65.127.126:3002/overview/product/images")
      .then((response) => {
        console.log(response.data.results);
        // when the data comes, change the items propriety of the state to hold the incoming data by setState function
        this.setState(
          {
            items: response.data.results,
          },
          () => {
            console.log("need the state", this.state);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
    //bringing the ratings from the api
    axios
      .get("http://159.65.127.126:3002/overview/rating")
      .then((response) => {
        //set the results property of the state to hold the elements that contains the rate inside of it
        this.setState({
          result: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick(event) {
    // when the user clicks, we need to store the url of the targeted element inside of the state so we
    // can render it later in the main image holder
    this.setState(
      {
        currentImage: event.target.src,
      },
      () => {}
    );
    //return the url that you stored in your state so when you invoce the function in the src of the image it give us the
    // url of the current image that we want to display
    return this.state.currentImage;
  }

  changeStyle(event) {
    this.setState({
      //storing the index of each clicked element so we can use that index to render the images of that specific style
      index: event.target.getAttribute("index"),
      skus: event.target.getAttribute("skus"),
    });
  }

  render() {
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
              <GeneralInformation
                index={this.state.index}
                result={this.state.result}
              />
            </div>
            <div id="third">
              <div className="style-holder">
                {this.renderStyle()}
                <StyleSelector
                  index={this.state.index}
                  changeStyle={this.changeStyle}
                  styles={this.state.items}
                />
              </div>
              <div className="size-and-quantity">
                <SizeAndQuantity
                  index={this.state.index}
                  skus={this.state.skus}
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
