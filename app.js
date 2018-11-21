const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 4000;
const path = require('path');
const db = process.env.DBURL || require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const app = express();



//connected to the database and log when connection received.
mongoose.connect(db, { useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database!');
});

//middlewares
//tell our server how to understand the graphql language
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json());
 //set static folder
app.use(express.static('public'));
//allow cross origin requests
app.use(cors());
require("dotenv").config();


app.use('/users', require('./routes/users'));
//handle routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`now listening for requests on port ${ port }`);
});
