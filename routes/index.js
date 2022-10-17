const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const likesRouter =  require('./likes.routes');
const postsRouter = require('./posts.routes');
const signupRouter =  require('./signup.routes');
const loginRouter =  require('./login.routes');
const commentsRouter =  require('./comments.routes');

router.use('/posts',likesRouter)

router.use('/posts', postsRouter);

router.use('/signup',signupRouter)

router.use('/login',loginRouter)

router.use('/comments',commentsRouter)




module.exports = router;
=======
const likesRouter = require("./likes.routes");
const postsRouter = require("./posts.routes");
const signupRouter = require("./signup.routes");
const loginRouter = require("./login.routes");
const commentsRouter = require("./comments.routes");

router.use("/posts", likesRouter);
router.use("/posts", postsRouter);
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/comments", commentsRouter);

module.exports = router;
>>>>>>> 97fa90bb83786f701996e9abfda189b427fb56e3
