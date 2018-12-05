const express = require("express");
const app = express();
const { PORT } = require("./config");

//Routes
require("./routes/api")(app);
require("./routes/views")(app);

//Server listen
function init(){
    console.log("Starting server...");
    app.listen(PORT, ()=>{
        console.log(`🚀 Server on port ${PORT}`);
    });
}

init();
