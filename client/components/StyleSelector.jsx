import React, { Component } from "react";
import axios from "axios";
export default class StyleSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = this.props.styles;
    return (
      <div>
        {arr.map((style, i) => {
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

          return (
            <div
              index={i}
              key={i}
              name={style.name}
              className="style-selector-thumbnail"
              id={res}
              onClick={this.props.changeStyle}
            ></div>
          );
        })}
      </div>
    );
  }
}
