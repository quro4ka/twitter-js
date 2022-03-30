var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {

    if (req.body) {
        let data = req.body
        console.log(data);
        res.status(200).send('Ok');
    }
    else {
        return res.sendStatus(400)
    }
    
});

module.exports = router;