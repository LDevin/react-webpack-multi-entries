const path = require('path');
const opn = require('opn');

module.exports = {
    devServer: {
        inline: true,
        hot: true,
        host: 'localhost',
        port: 8086,
        compress: true,
        contentBase: require('../var/dir-vars.config').buildDir,
        publicPath: '/',
        historyApiFallback: true,
        disableHostCheck :true,

        after() {
            opn('http://localhost:' + this.port + this.publicPath + 'index/index');
        },
    }
}