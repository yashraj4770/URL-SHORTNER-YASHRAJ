import express, { request, response } from 'express';
import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middlewares/404.js';
import { connectToDB } from './src/utils/db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { shortRoute } from './src/api/v1/routes/url-short-routes.js';
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/',userRoutes);
app.use('/',shortRoute);
app.use(error404);
const promise = connectToDB();
promise.then(result => {
    console.log('DB Connection Created Successfully !');
    const server = app.listen(1234,err => {
    if(err){
        console.log('Server Crash',err);
    }
    else{
        console.log('Server Up and Running',server.address().port);
    }
})

}).catch(err => {
    console.log('DB Connection Fails',err);

})
