const express=require('express')
const app = express()

const port = 4000;
app.listen(port, () => {
console.log(`The Server is running on port ${port}`);
});


function logger(req, res, next) {
    console.table({ method: req.method, path: req.url });
    var date= new Date()
    if((date.getHours()<3|| date.getHours()>21)||(date.getDate()==0)||(date.getDate()==6)){
    next(res.send('we are closed'))
    }
    else {next()} 
    }

    app.use(logger);

    app.use(express.static(__dirname + "/Pub"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Pub/home.html");
    });

app.get("/contact", (req, res) => {
        res.sendFile(__dirname + "/Pub/contact.html");
        });
    
app.get("/service", (req, res) => {
            res.sendFile(__dirname + "/Pub/service.html");
            });

            
    app.get('/style.css',(req, res) => {
    res.sendFile(__dirname + "/Pub/stlye.css")})

