import express from "express";
// import ejs from "ejs";
import dirname, { join } from "path";
import { fileURLToPath } from "url";
import { userController }  from "./controller/user.controller.js";

const __dirname = dirname.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const app = express();



app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("port", 3002);

app.use(express.static(join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(app.get("port"), () => {
  console.log(`App started on port ${app.get("port")}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/registro", (req, res) => {
  userController.registro(req, res);
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/ingresar", (req, res) => {
  userController.login(req, res);
});