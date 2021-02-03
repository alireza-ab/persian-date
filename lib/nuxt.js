import { resolve } from "path"


export default function () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'PersianDate.js'
  })
}

module.exports.meta = require('../package.json')