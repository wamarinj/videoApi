const express = require("express");
const videosRoutes = require("./routes/videos.routes");

const app = express();

app.use(express.json());

app.use("/api/v1", videosRoutes);

module.exports = app;