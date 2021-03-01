import axios from "axios";
import React from "react";
import GeneralInformation from "./GeneralInformation.jsx";
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 id="title">Hello Service 1</h1>
        <GeneralInformation />
      </div>
    );
  }
}
