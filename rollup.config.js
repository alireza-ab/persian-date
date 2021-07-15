import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
	input: "src/PersianDate.js",
	output: [
		{
			file: "dist/PersianDate.js",
			format: "cjs",
			exports: "auto",
		},
		{
			file: "dist/PersianDate.min.js",
			format: "cjs",
			plugins: [terser()],
			exports: "auto",
		},
		{
			file: "dist/PersianDate.umd.js",
			format: "umd",
			name: "PersianDate",
		},
		{
			file: "dist/PersianDate.umd.min.js",
			format: "umd",
			plugins: [terser()],
			name: "PersianDate",
		},
	],
	plugins: [nodeResolve(), babel({ babelHelpers: "bundled" })],
});
// const path = require('path');
// module.exports = [
//     {
//         mode: "development",
//         target: "node",
//         entry: './src/PersianDate.js',
//         devtool: 'source-map',
//         output: {
//             path: path.resolve(__dirname, "dist"),
//             filename: 'PersianDate.js',
//             library: "PersianDate",
//             libraryTarget: "umd",
//             libraryExport: "default",
//         },
//     },
//     {
//         mode: "production",
//         target: "node",
//         entry: './src/PersianDate.js',
//         devtool: 'source-map',
//         output: {
//             path: path.resolve(__dirname, "dist"),
//             filename: 'PersianDate.min.js',
//             library: "PersianDate",
//             libraryTarget: "umd",
//             libraryExport: "default",
//         },
//     },
//     {
//         mode: "development",
//         entry: './src/PersianDate.js',
//         devtool: 'source-map',
//         output: {
//             path: path.resolve(__dirname, "dist"),
//             filename: 'PersianDate.umd.js',
//             library: "PersianDate",
//             libraryTarget: "umd",
//             libraryExport: "default",
//         },
//     },
//     {
//         mode: "production",
//         entry: './src/PersianDate.js',
//         devtool: 'source-map',
//         output: {
//             path: path.resolve(__dirname, "dist"),
//             filename: 'PersianDate.umd.min.js',
//             library: "PersianDate",
//             libraryTarget: "umd",
//             libraryExport: "default",
//         },
//     }
// ];
