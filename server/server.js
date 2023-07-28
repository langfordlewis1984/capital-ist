const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8081;

app.get("/", (request, response) => {
  response.status(200).json("Rootin' tootin' root:");
});

app.get("/capitalist", async (request, response) => {
  try {
    API =
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,landlocked,population,flags,timezone,continents";
    res = await axios.get(API);
    response.json(res.data);
  } catch (error) {
    console.error("Error fetching country data:", error);
    response
      .status(500)
      .json({ error: "An error occurred while fetching country data" });
  }
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
