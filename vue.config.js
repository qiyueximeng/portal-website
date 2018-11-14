module.exports = {
    configureWebpack: {
        // 使 webpack 构建 source map
        // 调试器可以将压缩的代码对应到其原文件的位置
        devtool: 'source-map'
    }
}