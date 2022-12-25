# oss-js-sdk-issue

Taro mini app 项目在使用 oss-js-sdk 时遇到错误。

Context:

Taro 创建的[空白项目](https://docs.taro.zone/docs/GETTING-STARTED#%E9%A1%B9%E7%9B%AE%E5%88%9D%E5%A7%8B%E5%8C%96)

除了 Taro 初始化之外安装的 package：

```
npm install ali-oss --save
npm install buffer --save
```

在调用[put()](https://github.com/ali-sdk/ali-oss#putname-file-options)操作时报错

```
WAServiceMainContext.js?t=wechat&s=1671961212831&v=2.29.0:1 TypeError: global2.XMLHttpRequest is not a constructor
    at module3.exports.ClientRequest._onFinish (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:28289)
    at module3.exports.<anonymous> (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:28207)
    at module3.exports.EventEmitter.emit (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:16440)
    at finishMaybe (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:20408)
    at afterWrite (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:20302)
    at afterTick (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:18582)
    at Item.run (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:16750)
    at Function.nextTick (vendors-node_modules_taro_weapp_prebundle_ali-oss_js.js?t=wechat&s=1671961212831&v=d63aa3ee57cd17bdfb785eba0be9cc4b:16722)
    at :48683/appservice/<setTimeout callback function>
    at WASubContext.js?t=wechat&s=1671961212831&v=2.29.0:1(env: macOS,mp,1.06.2212011; lib: 2.29.0)

```
