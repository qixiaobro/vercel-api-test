const express = require('express');
const router = express.Router();

// 定义 /api/sum 路由
router.post('/', (req, res) => {
  const { a, b } = req.body;

  // 检查参数是否为数字
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be numbers' });
  }

  const sum = a + b;
  res.json({ sum });
});

module.exports = router;
