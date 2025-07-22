const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// โหลด config.json
const config = require("./config.json");
const PORT = config.port || 3001; // fallback ถ้าไม่มี port ใน config

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
