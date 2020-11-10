const router = require("express").Router();
const verify = require("../authtoken")

router.get('/',verify,(req,res)=>{
    res.json({posts:{title:"ny fost"}})
})
module.exports = router;
