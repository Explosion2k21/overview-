const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();
const API_KEY = process.env.API_KEY;
const port = process.env.PORT || 3002;
// const host = process.env.DEV_HOST || "localhost";
var cors = require("cors");

app.use(cors());
var axios = require("axios");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.get("/overview", (req, res) => {
  axios
    .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
      headers: {
        Authorization: API_KEY,
      },
    })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.get("/overview/rating", (req, res) => {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001",
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.get("/overview/product/images", (req, res) => {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles",
      {
        headers: {
          Authorization: API_KEY,
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
