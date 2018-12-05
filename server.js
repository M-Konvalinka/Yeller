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

// client.query('SELECT * FROM yell',(err, res) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('DATA WAS Received?');
//         console.log('The data gotten is' + (JSON.stringify(res.rows)));
//         // client.end();
//     }
// })
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    client.query('SELECT * FROM yell',(err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result.rows);
            res.send({express : [result.rows]});
            console.log('DATA WAS Received?');
            console.log('The data gotten is' + (JSON.stringify(res.rows)));
            // client.end();
        }
    })
//   res.send({ express: [
//                         {
//                         id : 11, content:'some text'
//                         },
//                         {
//                         id : 12, content:'other text'
//                         },
//                         {
//                         id : 13, content:'more text'
//                         },
//                         {
//                         id : 14, content:'test text'
//                         },
//                         {
//                         id : 15, content:'random words'
//                         },
//                         {
//                         id : 16, content:'other random words'
//                         },
//                         {
//                         id : 17, content:'more random words'
//                         },
//                         {
//                         id : 18, content:'stuff'
//                         },
//                         {
//                         id : 19, content:'& things'
//                         },
//                         {
//                         id : 20, content:'& such'
//                         },
//                     ]
//     })
});

// info saved below for data stored in the backend
// app.get('/express_backend', (req, res) => {
//     res.send({ express: [
//                           {
//                           id : 11, content:'some text'
//                           },
//                           {
//                           id : 12, content:'other text'
//                           },
//                           {
//                           id : 13, content:'more text'
//                           },
//                           {
//                           id : 14, content:'test text'
//                           },
//                           {
//                           id : 15, content:'random words'
//                           },
//                           {
//                           id : 16, content:'other random words'
//                           },
//                           {
//                           id : 17, content:'more random words'
//                           },
//                           {
//                           id : 18, content:'stuff'
//                           },
//                           {
//                           id : 19, content:'& things'
//                           },
//                           {
//                           id : 20, content:'& such'
//                           },
//                       ]
//       })
//   });
