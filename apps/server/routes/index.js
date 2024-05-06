import auth from "./auth.js"
import homepage from "./homepage.js"
import fashion from "./fashion.js"
import home from "./home.js"
import food from "./food.js"
import beauty from "./beauty.js"


export default function routes(app) {

    app.use("/auth", auth);
    app.use("/homepage" , homepage);
    app.use("/fashion" , fashion);
    app.use("/home" , home);
    app.use("/food" , food);
    app.use("/beauty" , beauty);


    app.get("/wishList", (req,res)=>{
       res.send("./componenents/wishList.jsx");
   })


}