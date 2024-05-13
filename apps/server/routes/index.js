import auth from "./auth.js";
import homepage from "./homepage.js";
import home from "./home.js";
import food from "./food.js";
import beauty from "./beauty.js";
import { couponRouter } from "./fashion.js";
import { userRouter } from "./login.js";
import { createRouter } from "./createUser.js";
import {searchRouter} from "./search.js"

export default function routes(app) {
  app.use("/auth", auth);
  app.use("/homepage", homepage);
  app.use("/home", home);
  app.use("/food", food);
  app.use("/beauty", beauty);
  app.use("/coupon", couponRouter);
  app.use(userRouter);
  app.use(createRouter);
  app.use(searchRouter);

  app.get("/wishList", (req, res) => {
    res.send("./componenents/wishList.jsx");
  });
}
