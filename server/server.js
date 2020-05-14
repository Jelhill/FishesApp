const express = require("express")
const app = express()
const morgan = require("morgan")
const router = require("./Router/router")
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())


app.get("/", (req, res) => {
    res.json("Welcome onboard")
})

app.use("/", router)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


module.exports = app