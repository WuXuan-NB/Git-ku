module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.43.192:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}