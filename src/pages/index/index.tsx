import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";
import OSS from "ali-oss";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { Buffer } from "buffer";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  handleClick() {
    const store = new OSS({
      accessKeyId: "",
      accessKeySecret: "",
      stsToken: "",
      region: "oss-cn-chengdu",
      bucket: "my-mini-app",
    });

    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: async function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var tempFile = tempFilePaths[0];

        const fileContent = Taro.getFileSystemManager().readFileSync(
          tempFile,
          "binary"
        );
        const buffer = Buffer.from(fileContent as string, "binary");
        console.log("is buffer? :", Buffer.isBuffer(buffer));
        const resp = await store.put("upload/avatar.jpg", buffer);
        console.log(resp);
      },
    });
  }

  render() {
    return (
      <View className="index">
        <AtButton type="primary" onClick={this.handleClick}>
          选择图片
        </AtButton>
      </View>
    );
  }
}
