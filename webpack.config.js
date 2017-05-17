var path = require('path');
var webpack = require('webpack');

module.exports =
{
    //debug : true,
    bail : true,
    cache : true,
    devtool : 'sourcemap',
    entry :
    {
        'bundle' : './src/app.jsx'
    },
    output :
    {
        path : __dirname + '/public',
        filename : '[name].js'
    },
    resolve :
    {
        modules : [
            'node_modules',
            path.resolve('./src')
        ]
    },
    node :
    {
        fs: "empty"
    },
    plugins :
    [
        //new webpack.ProvidePlugin(
        //{
        //    '$' : 'jquery'
        //}),
        //new webpack.optimize.CommonsChunkPlugin('commons.js'),
        //new ExtractTextPlugin('./styles.css', {allChunks : true}),
        new webpack.DefinePlugin(
        {
            'process.env.NODE_ENV' : '"development"'
        }),
        new webpack.optimize.UglifyJsPlugin(
        {
            'minimize' : false,
            'compress' :
            {
                'warnings' : true
            }
        })
    ],
    module :
    {
        rules :
        [
        /*
            {
                test : /globalCSS.scss$/,
                //loader : ExtractTextPlugin.extract('isomorphic-style-loader', 'css?modules=false','sass')
                loaders : ['isomorphic-style-loader','css?modules=false','sass']
            },
            */
            {
                test : /\.jsx$/,
                loader : 'babel-loader',
            },
            {
                test : /\.json$/,
                loaders : ['json-loader']
            }
        ]
    }
}