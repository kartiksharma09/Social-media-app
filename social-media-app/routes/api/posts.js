const express = require("express");
const router = express.Router();

//@route  GET api/posts
//desc    Test Route
//access  public

router.get("/", (req,res)=> res.send("posts route"));

module.exports = router;