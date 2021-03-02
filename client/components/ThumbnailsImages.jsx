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
  }
  render() {
    var myThumbnail = [];
    this.state.items.map((item) => {
      myThumbnail.push(item.photos);
    });
    console.log("thumbnaaaaiiillll hee", myThumbnail[0]);

    return (
      <div className="thumb-connt">
        {myThumbnail.length !== 0
          ? myThumbnail.map((item, i) => {
              return (
                <div key={i} className="thumbnail-container">
                  <img
                    className="thumbnail-image"
                    onClick={this.props.changeImage}
                    src={item[0].thumbnail_url}
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
