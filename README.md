# 此项目为搬运，因为原作者的仓库被封了，我不是作者本人
# 此项目为搬运，因为原作者的仓库被封了，我不是作者本人
# 此项目为搬运，因为原作者的仓库被封了，我不是作者本人
# 原作者[Github@ix64](https://github.com/ix64)

# Unlock Music 音乐解锁

- 在浏览器中解锁加密的音乐文件。 Unlock encrypted music file in the browser.
- Unlock Music 项目是以学习和技术研究的初衷创建的，修改、再分发时请遵循 [License][license]
- [相关的其他项目][related_projects]

[license]: https://github.com/fjqz177/unlock-music/blob/master/LICENSE

[related_projects]: https://github.com/fjqz177/unlock-music/wiki/和UnlockMusic相关的项目

## 特性

### 支持的格式

- [x] QQ 音乐 (.qmc0/.qmc2/.qmc3/.qmcflac/.qmcogg/.tkm)
- [x] Moo 音乐格式 (.bkcmp3/.bkcflac/...)
- [x] QQ 音乐 Tm 格式 (.tm0/.tm2/.tm3/.tm6)
- [x] QQ 音乐新格式 (.mflac/.mgg/.mflac0/.mgg1/.mggl)
- [x] <ruby>QQ 音乐海外版<rt>JOOX Music</rt></ruby> (.ofl_en)
- [x] 网易云音乐格式 (.ncm)
- [x] 虾米音乐格式 (.xm)
- [x] 酷我音乐格式 (.kwm)
- [x] 酷狗音乐格式 (.kgm/.vpr)

### 其他特性

- [x] 在浏览器中解锁
- [x] 拖放文件
- [x] 批量解锁
- [x] 渐进式 Web 应用 (PWA)
- [x] 多线程
- [x] 写入Meta和封面图片

## 使用方法

### 安装浏览器扩展

[![Chrome Web Store](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/gldlhhhmienbhlpkfanjpmffdjblmegd)

### 自行构建

- 环境要求
  - nodejs (v16.x)
  - npm

1. 获取项目源代码后安装相关依赖：

   ```sh
   npm ci
   ```

2. 然后进行构建。编译后的文件保存到 dist 目录下：

   ```sh
   npm run build
   ```

- 如果是用于开发，可以执行 `npm run serve`。

3. 如需构建浏览器扩展，build 完成后还需要执行：

   ```sh
   npm run make-extension
   ```
