const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
require('dotenv').config();

mongoose.set('strictQuery', true);
//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI);
const mongoConnection = mongoose.connection;
mongoConnection.on('error', (err) => {
    console.error(err);
})
mongoConnection.on('connected', () => {
    console.log(`Database Connected`);
})

//APP START
const app = express();
const port = 3000 || process.env.PORT

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server Running on ${port}`);
})