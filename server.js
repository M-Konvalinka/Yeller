const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { Pool, Client } = require('pg');
let yell = 'fifth set of test data';
let created_on = new Date();

const pool = new Pool({
  user: 'mikek',
  host: 'localhost',
  database: 'testdb',
  password: 'pass69420',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    console.log('pool.query is working!')
    pool.end()
})

const client = new Client({
    user: 'mikek',
    host: 'localhost',
    database: 'testdb',
    password: 'pass69420',
    port: 5432,
})
client.connect()


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    client.query('SELECT * FROM yell',(err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log('result.rows = ' + result.rows);
            res.send({express : result.rows});
            console.log('DATA WAS Received?');
            console.log('The data gotten is' + (JSON.stringify(res.rows)));
            // client.end();
        }
    })

});

app.post('/express_backend', (req,res) => {

});
