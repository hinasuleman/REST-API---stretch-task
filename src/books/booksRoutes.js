const { Router } = require("express");
const { addBooks, listBooks, updateAuthor, deleteBooks } = require("./booksControllers");
const {tokenCheck} = require("../middleware/index")

const booksRouter = Router();

booksRouter.post("/addBooks", addBooks);
booksRouter.get("/listBooks", listBooks);
booksRouter.put("/updateAuthor", updateAuthor);
booksRouter.delete("/deleteBooks",tokenCheck, deleteBooks);



module.exports = booksRouter;