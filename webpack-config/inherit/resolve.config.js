var path = require('path');

var IS_PROD = process.env.NODE_EV === 'prod';

module.exports = {
    resolve: {
        extensions: ['.js', '.css', '.less','.jsx','.json'],
        alias: {
            config: path.resolve(process.cwd(), IS_PROD ? './src/public/config/prod' : './src/public/config/dev')
        }
    }
}