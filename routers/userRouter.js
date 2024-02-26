import express from "express"
import {edit, remove, join, personal} from "../controllers/userController";

const userRouter = express.Router();


userRouter.get("/:id(\\d+)", personal)
userRouter.get("/edit",edit);
userRouter.get("/delete",remove);

export default userRouter;