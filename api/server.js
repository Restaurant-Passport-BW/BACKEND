const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const citiesRouter = require('../cities/citiesRouter');
const restaurantsRouter = require('../restaurants/restaurantsRouter.js')
const server = express();

server.use(helmet());
server.use(cors())
server.use(express.json());


server.use('/rpp/auth', authRouter);
server.use('/rpp/users', usersRouter);
server.use('/rpp/cities', citiesRouter);
server.use('/rpp/restaurants', restaurantsRouter);
server.get('/', (req, res) => {
    res.send("This Is The Restaurant Passport Server")
})

module.exports = server;