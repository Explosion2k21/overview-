import React from "react";
import StarRatings from "react-star-ratings";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("star rating mounted");
  }

  render() {
    return (
      <div className="star_rating_container">
        <StarRatings
          rating={4.355}
          starRatedColor="rgb(80, 80, 80)"
          changeRating={this.changeRating}
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      </div>
    );
  }
}

export default StarRating;
