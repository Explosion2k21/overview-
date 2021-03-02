import React from "react";
import axios from "axios";
class SizeAndQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }
  componentDidMount() {
    axios
      .get("/product/images")
      .then((response) => {
        // when the data comes, change the items propriety of the state to hold the incoming data by setState function
        this.setState(
          {
            elements: response.data.results,
          },
          () => {
            console.log("need the state 222222222", this.state);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    var ourArr = this.state.elements
    return (
      <div>
        <select name="cars" id="opts">
          <option className="opt" value="">
            Select Size
          </option>
          <option className="opt" value="S">
            S
          </option>
          <option className="opt" value="L">
            L
          </option>
          <option className="opt" value="XL">
            XL
          </option>
          <option className="opt" value="XXL">
            XXL
          </option>
        </select>
        <select name="cars" id="qunts">
          <option className="qunt" value="1">
            1
          </option>
        </select>
      </div>
    );
  }
}

export default SizeAndQuantity;
