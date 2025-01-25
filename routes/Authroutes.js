import express from 'express'
import {
    registerController,
    loginController,
    testController,
    ForgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
    } 
from "../controller/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js'


//router object
const router=express.Router()

//routing
//REGISTER ||  METHOD POST
router.post("/register",registerController)

// LOGIN || METHOD POST
router.post("/login",loginController)

//test routes
router.get("/test",requireSignIn, isAdmin, testController)

//protected route
router.get("/user-auth",requireSignIn , (req,res)=>{
    res.status(200).send({ok: true})
});

//Admin protected route
router.get("/admin-auth",requireSignIn , isAdmin  ,(req,res)=>{
    res.status(200).send({ok: true})
});

//Forgot Password 
router.post("/forgot-password",ForgotPasswordController)

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);



export default router 