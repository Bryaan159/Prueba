var {
    getAll,
    getWord,
    createWord,
    updateWord,
    deleteWord,
  } = require("../controllers/word");
  var express = require("express");
const { Passport } = require("passport/lib");
  var router = express.Router();
  
  router.get("/", getAll);
  router.get("/:term",getWord);
  router.post("/", createWord);
  router.put("/:term", updateWord);
  router.delete("/:term", deleteWord);
  
  module.exports = router;