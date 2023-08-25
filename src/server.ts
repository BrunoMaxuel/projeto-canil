import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';
import  Session from "express-session";
import flash from "connect-flash";
import { mongoConnect } from './database/mongo';

dotenv.config();

mongoConnect();
const server = express();
//config session
server.use(Session(
    {
        secret:"1234",
        resave: true,
        saveUninitialized: true
    }
));
//config flash
server.use(flash());

//middlewere
server.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

server.set('view engine', 'mustache');

server.set('views', path.join(__dirname, 'views'));

server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));


server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req, res)=>{
    res.render('pages/404');
});

server.listen(process.env.PORT);