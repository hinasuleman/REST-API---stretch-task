require("./db/connection");

const express = require("express");
const booksRouter = require("./books/booksRoutes");

const app = express();
const port = process.env.PORT ||5001;

app.use(express.json());

app.use(booksRouter);

app.listen(port, () => {
    console.log('Listening on port ${port}')

});
