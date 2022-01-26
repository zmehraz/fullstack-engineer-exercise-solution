import { HelloController } from "./controller/hello.controller";

let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')


// Express Route
const patientRoute = require('../routes/patient.route')

// Connecting mongoDB Database
  mongoose.connect("mongodb://treeline:treeline@localhost:27017/jshiring", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const helloController = new HelloController();

  const app = express();
  app.use("/", helloController.getRouter());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(cors())
app.use('/patients', patientRoute)

// PORT
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

