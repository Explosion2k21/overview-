import React, { Component } from "react";
import axios from "axios";
export default class StyleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
  }

  render() {
    console.log("style selector props", this.props.styles);
    const arr = this.props.styles;
    return (
      <div className="style-holder">
        <h4 id="style">{"STYLE > " + this.props.styles[0]} </h4>
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
          console.log("my res", res);
          return (
            <div key={i} className="style-selector-thumbnail" id={res}></div>
          );
        })}
      </div>
    );
  }
}
