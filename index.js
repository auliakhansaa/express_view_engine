const express = require("express");

const app = express();
const port = 8080;

// Anggap saja sebuah database
const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.post("/register", (req, res) => {
  const judulDrama = req.body.judulDrama;
  const genre = req.body.password;

  users.push({
    email: email,
    password: password,
  });

  console.log(users);

  res.redirect("/tampilkan-user");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`Jumlah user ${users.length}`);
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("users", {
    users,
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
