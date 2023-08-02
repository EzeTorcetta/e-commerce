const { Router } = require("express");

// import routers:
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const router = Router();


//* ROUTES *//
router.use("/user", userRouter);
router.use("/product", productRouter)

//****************************************/
module.exports = router;
