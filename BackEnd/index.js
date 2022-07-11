const connectTOMongo = require('./db');
const cors = require('cors')

connectTOMongo();
const express = require('express')
const app = express()
const port = 9000

app.use(cors())
app.use(express.json())


// Available Routes
app.use('/api/auth',require('./routers/authRegister'))
app.use('/api/auth',require('./routers/authlogin'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})