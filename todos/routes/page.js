// 경로만 지정
const express = require("express");
const { read, update, list, create } = require("../controllers/page");

const router = express.Router();

module.exports = router;

router.get("/", list);
router.get("/todos", list);
router.get("/todos/:id", read);

// router.get("/todos/modify/:id", update);
// router.post("/todos/modify/:id", update);
router.route("/todos/modify/:id").get(modify).post(update);

router.get("/todos/remove/:id", remove);
router.post("/todos/create", create);

module.exports = router;
