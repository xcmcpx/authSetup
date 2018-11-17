const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000;
const path = require('path');
const db = require('./config/keys').mongoURI;


const app = express();

//allow cross origin requests
app.use(cors());
require("dotenv").config();
//connected to the database and log when connection received.
mongoose.connect(db, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database!');
});
//tell our server how to understand the graphql language
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));




    //set static folder
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`now listening for requests on port ${ port }`);
});
