import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

const app = express(); // express 함수로 express 어플리케이션 생성.
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", global);
app.use("/videos", video);
app.use("/users", user);

export default app;
