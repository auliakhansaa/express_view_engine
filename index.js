const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/salam", (req, res) => {
  const namaDariQuery = req.query.nama || "Tidak ada nama";

  res.render("salam", {
    nama: namaDariQuery,
  });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
