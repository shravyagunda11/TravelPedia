import app from './api/app.js';

const port=8800
app.listen(port,()=>{
    console.log("Connected to the Backend",port);
});