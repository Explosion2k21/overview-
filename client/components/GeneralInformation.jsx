import React from "react";
import StarRating from "./StarRating.jsx";
import axios from "axios";
class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    //getting the general informations using an axios request to the api
    axios
      .get(`http://161.35.223.194:3002/overview`)
      .then((response) => {
        this.setState({
          data: response.data[this.props.index],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="cont">
        <div className="rate-review-container">
          <div className="stars">
            <StarRating ratingArr={this.props.result} />
          </div>
          <a className="read-reviews" href="#reviews">
            Read All Review
          </a>
        </div>

        <label className="category-label">{this.state.data.category}</label>
        <h1 className="product-name">{this.state.data.name}</h1>
        <label className="price">{"$" + this.state.data.default_price}</label>
      </div>
    );
  }
}

export default GeneralInformation;
