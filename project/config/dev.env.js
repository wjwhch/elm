// 本地环境
let config = require('./config')
module.exports = {
  // NODE_ENV: '"development"',
  
  devServer:{
    // proxy: 'http://localhost:3000',//告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
    // host: '0.0.0.0',
    port: 8002,
    open: false,
    https: true,
    // proxy: null, // string | Object
    disableHostCheck: true, //进行配置反向代理，一定要加上“disableHostCheck: true”这句话
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api':{//axios访问 /api ==  target + /api  
        // target:'https://uncle9.top',
        target:'http://localhost:3000',
        // target:config.baseUrl.localhost_https,
        changeOrigin:true,//创建虚拟服务器 
        ws:true,//websocket代理
      },
      '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://api.douban.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}