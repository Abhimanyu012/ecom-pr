import express from "express";
import { ENV } from "./config/env";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
// import { Pool } from "pg";

const app = express();
// const PORT = 5001;

app.use(cors({
    origin:ENV.FRONTEND_URL
}));
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  // const {} = req.body
  res.json({
    message:
      "Welcome to the Productify API -Powered by Postgresql,Drizzle orm & Clerk Auth",
    endpoint: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/commetns",
    },
  });
});
app.listen(ENV.PORT, () => {
  console.log(`server is running on port ${ENV.PORT}`);
});
