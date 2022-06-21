const express = require("express");
const cors = require("cors");
const http = require("http");

//Routes
const dataRoutes = require("./routes/data.routes");

const { connectDb } = require("./helpers/db");

const res = require("express/lib/response");

const PORT = process.env.PORT || 4000;

const app = express();

connectDb();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Cors config default
app.use(
  cors({
    origin: (_origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
app.use("/api/data", dataRoutes);

//Not found routes
http: app.use("*", (_req, _res, next) => {
  return next(setError(404, "Route not found"));
});

// Error handler
app.use((error, _req, res, _next) => {
  return res
    .status(error.code || 500)
    .json(error.message || "Unexpected error");
});

const server = http.createServer(app);

// Open Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
