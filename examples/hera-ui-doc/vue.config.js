module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/hera-ui/' : '/',
    outputDir: '../../docs',
    configureWebpack: {
        resolve: {
            alias: {
                main: "../../../"
            }
        }
    }
}
