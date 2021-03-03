import React from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // after passing the array that contains the rating through the props, we gonna map throw it a
    // and sum the total numbre of rating then devide it by the number of users that voted for that product
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
