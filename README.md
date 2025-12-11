# Express.js Hello World Server

这是一个简单的 Express.js 框架的 Hello World 应用程序。

## 功能特性

- 基础路由：`/` 返回 "Hello World from Express.js!"
- 健康检查路由：`/health` 返回服务器状态
- 监听端口：3000

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动服务器
```bash
# 开发模式（使用 nodemon 自动重启）
npm run dev

# 生产模式
npm start
```

### 访问应用
1. 启动服务器后，访问：http://localhost:3000
2. 健康检查：http://localhost:3000/health

## 项目结构
```
├── index.js          # Express 服务器主文件
├── package.json      # 项目配置和依赖
└── README.md         # 项目说明文档
```

## 依赖
- express: ^4.18.2
- nodemon: ^3.0.1 (开发依赖)

## 使用说明
1. 确保已安装 Node.js (推荐版本 14+)
2. 克隆或下载本项目
3. 运行 `npm install` 安装依赖
4. 运行 `npm run dev` 启动开发服务器
5. 打开浏览器访问 http://localhost:3000

## 扩展建议
- 添加更多路由和功能
- 集成数据库连接
- 添加中间件支持
- 配置环境变量
- 添加测试用例