import React, { Component } from "react";
import axios from "axios";
export default class StyleSelector extends Component {
  constructor(props) {
    super(props);
  }
  // now we gonna map through the styling array that we sended through the props and each time we
  // pass through an element we take the name of that style, and we store the index also because we are going
  // to need it later to render the correct images.
  render() {
    const array = this.props.styles;

    return (
      <div>
        {array.map((style, i) => {
          var arr = [];
          for (var j = 0; j < style.name.length; j++) {
            if (style.name[j] !== " " && style.name[j] !== "&") {
              arr.push(style.name[j]);
            } else {
              if (arr[j - 1] !== "-") {
                arr.push("-");
              } else if (arr[j - 1] === "-") {
                arr.splice(j - 1, 1);
              }
            }
          }
          var res = arr.join("");
          var skusObj = array[this.props.index].skus;

          var skusArr = [];
          for (var key in skusObj) {
            skusArr.push(key);
          }

          return (
            <div
              skus={skusArr[this.props.index]}
              index={i}
              key={i}
              name={style.name}
              className="style-selector-thumbnail"
              id={res}
              onClick={(e) => {
                this.props.changeStyle(e);
              }}
            ></div>
          );
        })}
      </div>
    );
  }
}
