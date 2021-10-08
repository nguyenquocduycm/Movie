var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
//require("./src/app/index")
var config = {
    devtool: "source-map",
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    devServer: {
        static: DIST_DIR,
        compress: true,
        port: 8080,
    },

    // devServer: {
    //         host: '192.168.1.4',
    //         port: 8080,
    // }
};

module.exports = config;

// const path = require('path'); 

// var SRC_DIR = path.resolve(__dirname, "./src");
// var DIST_DIR = path.resolve(__dirname, "dist");
// //require("./src/app/index")
// module.exports = {     
//     devtool: "source-map",     
//     entry : SRC_DIR + "/app/index.js",  
//     output : {        
//         path: DIST_DIR + "/app",       
//          filename: "bundle.js"     },     
//          module :{         
//              loaders: [              
//                  {                  
//                      test: /\.js$/,                  
//                      exclude: /node_modules/,                  
//                      loader:"babel-loader"             
//                     }         
//                 ]     
//             } 
//         };