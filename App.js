const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const joke = response.data;
    res.render("index", { joke });
  } catch (error) {
    res.render("index", { joke: { setup: "Oops!", punchline: "Could not fetch joke." } });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
