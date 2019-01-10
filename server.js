const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
let created_on = new Date();
const SELECT_ALL_YELLS = 'SELECT * FROM yells';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yellerproject',
})

connection.connect(err => {
    if(err){
        return err;
    }
})

app.use(cors());

app.listen(4000, () => {
    console.log('yells server listening on port 4000');
});

app.get('/', (req,res) =>{
    res.send('go to /yells to see yells')
});

app.get('/yells', (req,res) => {
    connection.query(SELECT_ALL_YELLS, (err, yells) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: yells
            })
        }
    })
})
// const port = process.env.PORT || 5000;
// const { Pool, Client } = require('pg');
// let yell = 'fifth set of test data';

// const pool = new Pool({
//   user: 'mikek',
//   host: 'localhost',
//   database: 'testdb',
//   password: 'pass69420',
//   port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     console.log('pool.query is working!')
//     pool.end()
// })

// const client = new Client({
//     user: 'mikek',
//     host: 'localhost',
//     database: 'testdb',
//     password: 'pass69420',
//     port: 5432,
// })
// client.connect()


// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // create a GET route
// app.get('/express_backend', (req, res) => {
//     client.query('SELECT * FROM yell',(err, result) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log('result.rows = ' + result.rows);
//             res.send({express : result.rows});
//             console.log('DATA WAS Received?');
//             console.log('The data gotten is' + (JSON.stringify(res.rows)));
//             // client.end();
//         }
//     })

// });

// app.post('/express_backend', (req,res) => {
//     // const createUser = (request, response) => {
//     //     const { name, email } = request.body
      
//     //     pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     //       if (error) {
//     //         throw error
//     //       }
//     //       response.status(201).send(`User added with ID: ${result.insertId}`)
//     //     })
//     //   }
//     client.query('INSERT INTO yell(yell, created_on) values($1, $2)', [(req.body.yellContent), created_on], (error, results) =>{
//         if(error){
//             console.log('there was an error adding info to the db');
//             throw error
//         }
//         console.log('the user info was added correctly');
//         // need to send the message back in json format, currently throwing an error that doesn't break anything but it's
//         // due to expecting json and just getting back a string
//         //     res.status(200)
//         //     .json({
//         //         status: 'success',
//         //         message: 'pushed a yell!'
//         //     });
//         res.status(201).send('user info was added correctly');
//     })

//     console.log('the data on the node backend is ' + (JSON.stringify(req.body)));
// });
