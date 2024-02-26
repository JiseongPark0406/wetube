import express from "express"
import {join, login} from "../controllers/userController"
import {main} from "../controllers/videoController"

const globalRouter = express.Router();


globalRouter.get("/", main)
globalRouter.get("/login", login)
globalRouter.get("/join", join)





export default globalRouter;