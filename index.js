const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.get('/test', (req, res) => {
    res.json({
        "message": "Hello World!"
    })
})

app.post('/event', (req, res) => {
    console.log("EVENT received: ", JSON.stringify(req.body, null, 2));
    res.json({
       message: "Event Received"
    })
})

app.listen(18880, () => {
    console.log("App is running at 18880");
})
