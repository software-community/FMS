const {Router} = require('express');

const router = Router();


// Use similar lines for all api route categories.
const exampleRouter = require('./example');
router.use('/example', exampleRouter);

const userRouter=require('./user');
router.use('/user', userRouter);

module.exports = router;