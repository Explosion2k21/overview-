const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

var axios = require("axios");

var MY_KEY = process.env.API_KEY;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.get("/product", (req, res) => {
  console.log(MY_KEY);
  axios
    .get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products", {
      headers: {
        Authorization: process.env.API_KEY,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => console.error(`Something went wrong ${error}`));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
