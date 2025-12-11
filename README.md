# Dev-Re

一个简单的 Express.js 项目，包含基础功能和通用组件。

## 功能特性

- ✅ Express.js 基础服务器
- ✅ 健康检查端点
- ✅ 通用全局跨域中间件
- ✅ 开发热重载支持

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 启动生产服务器
```bash
npm start
```

## 项目结构

```
├── index.js              # 主应用文件
├── middlewares/
│   └── cors.js          # 通用跨域中间件
├── package.json         # 项目配置
├── README.md           # 项目文档
└── .gitignore          # Git 忽略文件
```

## API 端点

### 基础路由
- `GET /` - Hello World 欢迎页面
- `GET /health` - 健康检查端点

## 跨域配置

项目已集成通用全局跨域中间件，支持以下功能：

### 默认配置
- 允许所有来源 (`*`)
- 支持常用 HTTP 方法 (GET, POST, PUT, DELETE, PATCH, OPTIONS)
- 允许 Content-Type 和 Authorization 请求头
- 允许发送凭据
- 预检请求缓存 24 小时

### 自定义配置
如需自定义跨域配置，可在 `index.js` 中修改：

```javascript
const { createCorsMiddleware } = require('./middlewares/cors');

// 自定义配置
const customCors = createCorsMiddleware({
  allowedOrigins: ['https://example.com', 'https://api.example.com'],
  allowedMethods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
  credentials: true,
  maxAge: 3600
});

app.use(customCors);
```

## 中间件说明

### CORS 中间件 (`middlewares/cors.js`)
- **功能**: 处理跨域资源共享 (CORS)
- **导出**:
  - `cors`: 默认配置的中间件
  - `createCorsMiddleware(options)`: 创建自定义配置的中间件
- **特性**:
  - 自动处理预检请求 (OPTIONS)
  - 支持白名单域名
  - 可配置请求方法和请求头
  - 支持凭据传输

## 开发说明

### 依赖项
- **express**: ^4.18.2 - Web 框架
- **nodemon**: ^3.0.1 - 开发热重载

### 脚本命令
- `npm start` - 启动生产服务器
- `npm run dev` - 启动开发服务器（支持热重载）

## 许可证

MIT License