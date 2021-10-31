const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const router = require("./app/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Vistrack API OK" });
});

app.use("/api", router);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Vistrack Server is running on port ${PORT}.`);
});
