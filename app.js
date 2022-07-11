require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3006;

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();