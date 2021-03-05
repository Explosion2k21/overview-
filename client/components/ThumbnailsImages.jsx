import React from "react";
import axios from "axios";

class ThumbnailsImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    //getting the thumbnail urls from the api throw an axios request
    axios
      .get(`http://localhost:3002/overview/product/images`)
      .then((response) => {
        this.setState(
          // save the data that we get in the state of the class
          {
            items: response.data.results,
          },
          () => {}
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //now we gonna map through that data and
    var myThumbnail = [];
    this.state.items.map((item) => {
      myThumbnail.push(item.photos);
    });
    return (
      <div className="thumb-connt">
        {myThumbnail.length !== 0
          ? myThumbnail.map((item, i) => {
              return (
                <div key={i} className="thumbnail-container">
                  <img
                    className="thumbnail-image"
                    onClick={this.props.changeImage}
                    src={item[this.props.index].thumbnail_url}
                  />
                </div>
              );
            })
          : null}
        <div className="trick"></div>
      </div>
    );
  }
}
export default ThumbnailsImages;
