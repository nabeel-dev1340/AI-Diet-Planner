const express = require("express");
const dietRoutes = require("./routes/dietRoutes");
const middleware = require("./middleware/middleware");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(middleware);

//Routes
app.use("/api", dietRoutes);

app.get("/ping", (req, res) => {
  res.status(200).send("Hello");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
