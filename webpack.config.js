const path = require('path');
module.exports = [
    {
        mode: "development",
        entry: './src/PersianDate.js',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.js',
            library: "PersianDate",
            libraryTarget: "umd",
        },
    },
    {
        mode: "production",
        entry: './src/PersianDate.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.min.js',
            library: "PersianDate",
            libraryTarget: "umd",
        },
    }
];