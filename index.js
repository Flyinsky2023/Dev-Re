const express = require('express');
const { cors } = require('./middlewares/cors');
const app = express();
const port = 3000;

// 应用全局跨域中间件
app.use(cors);

// 基础路由 - Hello World
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// 健康检查路由
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Express server is running' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});