const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;

var axios = require("axios");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.get("/product", (req, res) => {
  axios
    .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
      headers: {
        Authorization: process.env.API_KEY,
      },
    })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.get("/reviews/rating", (req, res) => {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001",
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.get("/product/images", (req, res) => {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles",
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
