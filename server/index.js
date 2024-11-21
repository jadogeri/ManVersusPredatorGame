const express = require('express');
const bodyParser = require('body-parser');
const {dbConnection} = require("./src/configs/mongoDB");
require('dotenv').config()
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
const port = process.env.PORT | 4000;


const cors = require("cors");
const {corsOptions} = require("./src/configs/cors")


// Middleware

app.use(express.json());
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())


app.use("/api/user", require("./src/routes/userRoutes"));
 app.use("/api/auth", require("./src/routes/authRoutes"));
 app.use("/api/admin", require("./src/routes/adminRoutes"));


app.use(errorHandler);
dbConnection();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

