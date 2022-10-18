const express = require("express");
const router = express.Router();

const likesRouter = require("./likes.routes");
const postsRouter = require("./posts.routes");
const usersRouter = require("./users.routes");
const commentsRouter = require("./comments.routes");

router.use("/posts", likesRouter);
router.use("/posts", postsRouter);
router.use("/", usersRouter);
router.use("/comments", commentsRouter);

module.exports = router;
