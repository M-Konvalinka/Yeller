const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
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

app.listen(5000, () => {
    console.log('yells server listening on port 5000');
});

app.get('/', (req,res) =>{
    res.send('go to /yells to see yells')
});

app.get('/yells', (req,res) => {
    connection.query(SELECT_ALL_YELLS, (err, yells) => {
        if(err){
            console.log('there was an Error!')
            return res.send(err)
        }
        else{
            console.log('the data was queried!')
            return res.json({
                data: yells
            })
        }
    })
})

app.post('/users', (req,res) => {
    console.log(req.body);
    console.log('attemping to add a user through the users post route');
    let userAdded = {
        name : req.body.username,
        password : req.body.password,
        email : req.body.email,
    }
    connection.query("INSERT INTO user set ?", userAdded, (err,res) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("USER ADDED!")
        }
    })
})

app.post('/yells', (req, res) => {
    console.log(req.body);
    console.log('adding a yell post request being hit');
    console.log('the request body is ' + req.body.yellContent);
    let informationAdded = {yell: req.body.yellContent};
    connection.query("INSERT INTO yells set ?", informationAdded, (err,res) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("information ADDED!");
        }
    }) 
})

// below works
app.post('/yells/delete', (req,res) => {
    console.log('the delete route is being hit');
    console.log('the request body id is ' + req.body.id);
    connection.query("DELETE FROM yells WHERE id= ?", [req.body.id], (err, res) =>{
        if(err){
            console.log('there was an error!');
            console.log(err);
        }
        else{
            console.log("yell DELETED!");
        }
    })
})