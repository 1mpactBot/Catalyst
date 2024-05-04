const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD } = process.env;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.iqvw7p1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = () => {
  mongoose
    .connect(DB_URL)
    .then((con) => console.log("connected to db"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
