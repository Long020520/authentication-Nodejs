require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}));

app.use("/user", require("./routers/userRouter"))
app.use("/api", require("./routers/uploadRouter"))

app.get("/",(req, res)  => {
    res.send("automation deploy heroku")
} )

const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err
    console.log("mongodb connected")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
