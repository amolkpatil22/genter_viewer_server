const express = require("express")
const connection = require("./utils/connection")
const viewAllQuestions = require("./controllers/viewAllQuestions")
const createSession = require("./controllers/createSession")
const studentResponse = require("./controllers/studentResponse")
const generateFeedback = require("./controllers/generateFeedback")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())
// app.get("/", (req, res) => {
//   res.status(200).send({ message: "This is the homepage." })
// })

app.get("/", viewAllQuestions)
app.post("/", createSession)
app.patch("/", studentResponse)
app.get("/feedback/:filename", generateFeedback)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connected")
    console.log("Server running...")
    console.log("PORT",process.env.PORT)
  } catch (error) {
    console.log(error)
  }
})
