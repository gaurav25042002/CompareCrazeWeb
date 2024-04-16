const connectToMongo = require("./db");
const express = require("express");
const http = require("http");
const cors = require("cors");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "enclave";

const auth = require("./routes/auth");
const user = require("./routes/user");
const PORT = process.env.PORT || 5000;

connectToMongo();

const app = express();

const ORIGINSITE = process.env.ORIGINSITE || '*';
const corsOptions ={
   origin:ORIGINSITE
}

app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads"));

app.use("/api/auth", auth);

app.use("/api/user", user);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `CompareCraze' Backend is running at Port - http://localhost:${PORT}`
  );
});
