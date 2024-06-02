const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

// 中间件解析请求体
app.use(express.json());
console.log(111)

// 导入sum路由模块
const sumRouter = require('./sum');
app.use('/api/sum', sumRouter);

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
