import React from "react";
import axios from "axios";
import GeneralInformation from "./GeneralInformation.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      result: [],
    };
  }

  componentDidMount() {
    axios
      .get("/reviews/rating")
      .then((response) => {
        this.setState(
          {
            result: response.data.results,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <GeneralInformation result={this.state.result} />
      </div>
    );
  }
}

export default App;
