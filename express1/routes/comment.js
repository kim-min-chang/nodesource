var express = require("express");
var Comment = require("../scemas/comment");

const router = express.Router();

// 댓글 등록
router.post("/", async (req, res, next) => {
  try {
    await Comment.create();
  } catch (error) {
    console.log(error);
    next(error); // 다음 미들웨어 호출
  }
});

// 댓글 수정,삭제

module.exports = router;
