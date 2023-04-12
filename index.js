require("dotenv").config();

const express = require("express");
const connetToDb = require("./database/db");
const path = require("path");
const Music = require("./model/music");




const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connetToDb();

app.get("/", async (req, res) => {
  const playlist = await Music.find();
  console.log(playlist);
  res.render("index", { playlist });
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`servidor rodando em http://localhost:${port}`)
);

