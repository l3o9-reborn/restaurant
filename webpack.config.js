const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    mode: 'development',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module:{
        rules:[
                {
                    test:/\.css$/,
                    use:['style-loader', 'css-loader'],
                },
                {
                    test:/\.html/,
                    use:['html-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    type: 'asset/resource',
                }
            ]
    }
}