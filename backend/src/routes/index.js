const { Router } = require('express');
const UserRouter = require('./user.routes');
const CardRouter = require('./card.routes');
const SessionRouter = require('./session.routes');
const AvatarRouter = require('./avatar.router');
const AccountRouter = require('./account.router');
const Billing = require('./billingData.router')
const routerApi = Router();

//rutas de user
routerApi.use('/user', UserRouter);

//rutas de cards
routerApi.use('/card', CardRouter);

//rutas de sessions
routerApi.use('/sessions', SessionRouter);

//rutas de avatar

routerApi.use('/avatar', AvatarRouter);

routerApi.use('/account', AccountRouter);

//rutas de billing data

routerApi.use('/billing', Billing);
module.exports = routerApi;
