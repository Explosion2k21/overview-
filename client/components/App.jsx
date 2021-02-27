import axios from "axios";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("service mounted");
    axios
      .get("/product")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello Service 1</h1>
        {/* <GeneralInformation /> */}
      </div>
    );
  }
}
