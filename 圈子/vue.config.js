module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.205.88:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}