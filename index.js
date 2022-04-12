const express = require("express");

const app = express();
const port = 3000;

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
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    email: email,
    password: password,
  });

  console.log(users);

  res.redirect("/register");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`Jumlah user ${users.length}`);
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
