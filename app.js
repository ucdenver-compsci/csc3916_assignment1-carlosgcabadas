var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

app.post('/', (req, res)=> {
    console.log(req.body)
    res = res.status(200)
    var contentType = req.get('Content-Type'); 
    if (contentType) {
        console.log("Content Type: " + contentType);
        res = res.type(contentType)
    }
    res.send(req.body)
})

app.listen(process.env.PORT || 8080)


module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
