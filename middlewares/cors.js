/**
 * 通用全局跨域中间件
 * 支持自定义配置的 CORS 处理
 */

/**
 * CORS 配置选项
 * @typedef {Object} CorsOptions
 * @property {string[]} [allowedOrigins] - 允许的源列表，默认 ['*']
 * @property {string[]} [allowedMethods] - 允许的 HTTP 方法，默认 ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
 * @property {string[]} [allowedHeaders] - 允许的请求头，默认 ['Content-Type', 'Authorization']
 * @property {boolean} [credentials] - 是否允许发送凭据，默认 true
 * @property {number} [maxAge] - 预检请求缓存时间（秒），默认 86400（24小时）
 */

/**
 * 创建 CORS 中间件
 * @param {CorsOptions} options - CORS 配置选项
 * @returns {Function} Express 中间件函数
 */
const createCorsMiddleware = (options = {}) => {
  const {
    allowedOrigins = ['*'],
    allowedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization'],
    credentials = true,
    maxAge = 86400
  } = options;

  return (req, res, next) => {
    // 处理预检请求
    if (req.method === 'OPTIONS') {
      // 设置 CORS 头
      if (allowedOrigins.includes('*')) {
        res.setHeader('Access-Control-Allow-Origin', '*');
      } else {
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
          res.setHeader('Access-Control-Allow-Origin', origin);
        }
      }

      res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(', '));
      res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(', '));
      
      if (credentials) {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
      }
      
      res.setHeader('Access-Control-Max-Age', maxAge);
      res.status(204).end();
      return;
    }

    // 处理普通请求
    if (allowedOrigins.includes('*')) {
      res.setHeader('Access-Control-Allow-Origin', '*');
    } else {
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
    }

    if (credentials) {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    // 暴露自定义响应头
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, X-Request-ID');

    next();
  };
};

/**
 * 默认 CORS 中间件（使用默认配置）
 */
const cors = createCorsMiddleware();

module.exports = {
  createCorsMiddleware,
  cors
};