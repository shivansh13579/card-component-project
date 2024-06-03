import express from 'express';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import { config } from 'dotenv';
import cors from 'cors';
import errorMiddleWare from './middleware/errorMiddleware.js';


config()

const app = express()

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));

app.use(express.json())



// app.use(cors({
//     origin: [process.env.FRONTEND_URL],
//     credentials: true
// }))

app.use(cookieParser())


app.use('/api/v1/user', userRoutes)

app.use(errorMiddleWare);

export default app;