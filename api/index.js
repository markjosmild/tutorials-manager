const express = require("express");
const app = express();
PORT = 8000;
const con = require("./database/appDatabase");
const tutRoute = require("./routes/tutorialsRoute");

//middlewares
app.use(express.json());

//routes
app.get("/test", (req, res) => res.json("test"));
app.use("/api/tutorials", tutRoute);

app.listen(PORT, () => console.log(`api is listening to port ${PORT}`));
