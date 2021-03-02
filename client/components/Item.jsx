import React from "react";
import { Paper, Button } from "@material-ui/core";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Paper>
          <img
            className="carouselImg"
            src={this.props.url}
            alt="Girl in a jacket"
          />{" "}
        </Paper>
      </div>
    );
  }
}

export default Item;
