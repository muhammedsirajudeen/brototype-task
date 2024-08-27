import express from "express";
import AdminController from "../controller/AdminController";
import passport from "passport";

const router = express.Router();

router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  AdminController.AllUsers
);
router.delete(
  "/user/:email",
  passport.authenticate("jwt", { session: false }),
  AdminController.DeleteUser
);

export default router;
