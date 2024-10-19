//importing express typescript with the Request and Response types
import express, { Request, Response } from 'express';
//import dotenv for env variables security
import dotenv from "dotenv";
import cors from "cors";
import helmet from 'helmet';
import concertsRouter from './Concerts/concerts.routes';
import usersRouter from './users/users.routes';
import artistsRouter from './artists/artists.routes';

//explicitly declare .env path since it is out of the root
dotenv.config({path: './src/.env'});
//declare express app and invoke
const app = express();

//decalare the port number
const port = process.env.PORT || 3000;

//enable cors request
app.use(cors());
//parse JSON bodies
app.use(express.json());
//parse url encoded bodies
app.use(express.urlencoded({ extended: true}));
//security middfle ware
app.use(helmet());

//check DB HOST
console.log(`MY_SQL_DB_HOST: ${process.env.MY_SQL_DB_HOST}`);

//add logger middle ware
// if (process.env.NODE_ENV == 'development') {
//   app.use(logger);
//   console.log(process.env.GREETING + ' in dev mode');
// }


//initialize a route for the app with req and res that are both type Request and type Response
app.get('/', (req: Request, res: Response) => {

  //this is the response
res.send('<h1>Welcome to Concert Friend API</h1>');

});

// Adding the router middlewares for concerts, artists, and users
app.use('/concerts', concertsRouter);
app.use('/artists', artistsRouter);
app.use('/users', usersRouter);

//have the app listen on the port 3000
app.listen(port, () => {

console.log(`Music API listening at http://localhost:${port}`)

});
