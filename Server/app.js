const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db");
const taskRouter = require("./Routers/TaskRouter");
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/AuthRouter");

const { LOCAL_PORT } = process.env;

//Connect to db
connectDB();

//Create server
const app = express();

// any request has something in it's body -> add it to req.body
app.use(express.json());
/*******to get the cookie in req.cookies**/
app.use(cookieParser());

//Router
const appRouter = express.Router();

app.use("/api/v1", appRouter);
appRouter.use("/user", userRouter);
appRouter.use("/task", taskRouter);
appRouter.use("/auth", authRouter);

appRouter.use("/login");

app.listen(LOCAL_PORT || 3000, () => {
  console.log(`Server started on ${LOCAL_PORT}`);
});
