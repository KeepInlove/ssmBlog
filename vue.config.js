/**这里之后，还有第一行的path是跟svg有关系的配置**/
const path = require('path')
module.exports = {
  devServer: {
    port: 8081,     // 端口号
  },
  lintOnSave: false,
  //3.0版本
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
        .test(/\.svg$/)
        .include.add(path.resolve(__dirname, './src/icons'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
        .test(/\.svg$/)
        .exclude.add(path.resolve(__dirname, './src/icons'))
        .end()
        .use('file-loader')
        .loader('file-loader')
  }

}
//2.0版本
// const path = require('path');
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias.set('@', resolve('src'))
//     // config.module.rules.delete("svg"); //重点:删除默认配置中处理svg
//     config.module
//         .rule('svg-smart')
//         .test(/\.svg$/)
//         .include
//         .add(resolve('src/icons')) //处理svg目录
//         .end()
//         .use('svg-sprite-loader')
//         .loader('svg-sprite-loader')
//         .options({
//           symbolId: 'icon-[name]'
//         })
//   }
// }



