/**
 * Created by zjl on 2017/7/11.
 */
module.exports = {
    runtimeConfig:{
        experimentalFeatures:{
            featureFoo: false,
            featureBar: true
        },

        thirdPartyApiKey: 'abcdefg123456'
    },
    publicPath: '/assets/',
    devServer:{
        port: 3000,
        /*
         proxy用来配置后端api的反向代理,
         ajax /api/auth/*的请求会被转发到 http://fantasticzhang.gtensor.com/auth/*, /api/pay/*的请求会被转发到http://fantasticzhang.gtensor.comv/pay/*.

         changeOrigin会修改HTTP请求头中的Host为target的域名, 这里会被改为fantasticzhang.gtensor.com

         pathRewrite用来改写URL, 这里我们把/api前缀去掉.
         */
        proxy:{
            '/api/auth/':{
                target:'http://fantasticzhang.gtensor.com',
                changeOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            },
            '/api/pay/':{
                target: 'http://fantasticzhang.gtensor.com',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}