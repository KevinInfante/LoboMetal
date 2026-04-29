const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res)=> {
    console.log("get request received");
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});