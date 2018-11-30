const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: {
                firstyell: {
                        id : 11, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                secondyell: {
                        id : 12, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                thirdyell: {
                        id : 13, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                fourthyell: {
                        id : 14, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                fifthyell: {
                        id : 15, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                sixthyell: {
                        id : 16, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                seventhyell: {
                        id : 17, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                eigthyell: {
                        id : 18, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                ninthyell: {
                        id : 19, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
                tenthyell: {
                        id : 20, content:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'
                        },
        }
    })
});
