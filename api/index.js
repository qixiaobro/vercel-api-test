const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Vercel会分配一个端口

// 中间件解析请求体
app.use(express.json());

// 引入hello路由
const helloRouter = require('./hello');
// 使用hello路由
app.use('/', helloRouter);

// 引入sum路由
const sumRouter = require('./sum');
// 使用sum路由
app.use('/api/sum', sumRouter);

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
