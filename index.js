const express = require('express');
const app = express();
const {PORT} = require('./config');
const routes = require('./routes');

require('./helper/db');


app.use(express.json());
app.use('/api', routes);

app.get('/', (req,res)=>res.send('Welcome to the task'));

app.listen(PORT, ()=>console.log(`server is up at http://localhost:${PORT}`))