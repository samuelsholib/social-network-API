const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const cwd = process.cwd();
const db = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

const connectionStringURI = `mongodb://127.0.0.1:27017/toughtsDBDB`;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/toughtsDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`App listening @ http://localhost:3001`));