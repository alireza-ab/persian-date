const path = require('path');
module.exports = [
    {
        mode: "development",
        target: "node",
        entry: './src/PersianDate.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.js',
            library: "PersianDate",
            libraryTarget: "umd",
            libraryExport: "default",
        },
    },
    {
        mode: "production",
        target: "node",
        entry: './src/PersianDate.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.min.js',
            library: "PersianDate",
            libraryTarget: "umd",
            libraryExport: "default",
        },
    },
    {
        mode: "development",
        entry: './src/PersianDate.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.umd.js',
            library: "PersianDate",
            libraryTarget: "umd",
            libraryExport: "default",
        },
    },
    {
        mode: "production",
        entry: './src/PersianDate.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: 'PersianDate.umd.min.js',
            library: "PersianDate",
            libraryTarget: "umd",
            libraryExport: "default",
        },
    }
];