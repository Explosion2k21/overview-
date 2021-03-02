import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
// import axios from "axios";
// import addRate from "../redux/actions/ratingActions";
class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myResult = this.props.ratingArr;
    var totalRating = 0;
    var totalUsers = this.props.ratingArr.length;
    myResult.map((element) => {
      totalRating += element.rating;
    });

    var currentRate = totalRating / totalUsers || 0;
    return (
      <div className="star_rating_container">
        {totalUsers ? (
          <StarRatings
            rating={currentRate}
            starRatedColor="rgb(80, 80, 80)"
            starDimension="15px"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
        ) : null}
      </div>
    );
  }
}

export default StarRating;
