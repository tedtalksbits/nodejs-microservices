import express from "express";
import router from "./api/routes.js";
const app = express();

const PORT = 5608;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(router);

app.listen(PORT, () => {
  console.log("app is listening on port: " + PORT);
});
