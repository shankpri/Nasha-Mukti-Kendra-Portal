import mongoose from "mongoose";
import server from "./app.js";

try{
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected - ${db.connection.host} - ${db.connection.name} `);

} catch(e){
    console.log(`Error Connecting to database - ${e.message}`);
    process.exit(1);
}
server.listen(process.env.PORT||8080,()=>{
    console.log(`Server started - http://localhost:${process.env.PORT}`);
});

