var path = require("path");
module.exports = {
    // absolute path
    context : path.resolve(__dirname, 'js'),
    // relative to context
    entry : './main.js',
    output : {
        filename : 'bundle.js'
    },
    // how to resolve dependencies
    resolve: {
        modules : ['.','node_modules'],
        alias : {
            backboneLocalstorage : 'backbone.localstorage/backbone.localStorage'
        }
    },
    // migration 1.x to 2.x, cannot omit the -loader
    resolveLoader : {
        moduleExtensions : ['-loader']
    }
};