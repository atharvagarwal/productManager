const express = require('express');
const app = express();
const connectDB = require('./model/db');
const userRouter = require('./routes/productRoutes');
var cors = require('cors')
const bodyParser = require("body-parser");
app.use(
    express.urlencoded({ extended: true })
);
app.use(bodyParser.json());
app.use(express.json());

app.use(cors())
  
// Connect to the database
connectDB();



app.use('/product', userRouter);

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});