const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000;
const uName = process.env.USER;
const uPass = process.env.PASS;
const path = require('path');


const app = express();

//allow cross origin requests
app.use(cors());
require("dotenv").config();
//connected to the database and log when connection received.
mongoose.connect("mongodb://cpat3:X22dPqCP!m@ds161856.mlab.com:61856/db-chrispcodes", { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database!');
});
//tell our server how to understand the graphql language
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
//serve static assets if in production
if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('cpcodesclient/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'cpcodes_client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`now listening for requests on port ${ port }`);
});
