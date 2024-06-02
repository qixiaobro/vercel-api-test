const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // 返回hello world html
  res.send(
    `<html><head><title>Hello World</title></head><body><h1>
    Hello World, 使用node.js和express.js部署在Vercel上

    接口列表：
    1. GET /
    2. POST /api/sum
      使用json格式的请求体，包含两个数字a和b，返回它们的和
    </h1></body></html>`
  );
});

module.exports = router;
