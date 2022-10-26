import app from "./app.js";
const PORT = process.env.PORT || 1999;
app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})