const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const ecgRouter = require("./routes/ecgRoutes");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log("hello from the middelware");

  next();
});

// ROUTES
app.use("/api/v1/ecg", ecgRouter);

// STARTING THE SERVER
module.exports = app;
