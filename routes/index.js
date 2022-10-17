const express = require('express');
const router = express.Router();

const likesRouter =  require('./likes.routes');
router.use('/posts',likesRouter)

const postsRouter = require('./posts.routes');
router.use('/posts', postsRouter);

const signupRouter =  require('./signup.routes');
router.use('/signup',signupRouter)

const loginRouter =  require('./login.routes');
router.use('/login',loginRouter)

const commentsRouter =  require('./comments.routes');
router.use('/comments',commentsRouter)




module.exports = router;