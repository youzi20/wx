// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    statusBarHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    list: [
      { image: "../../assets/svg/article.svg", text: "文章", link: "../news/index?type=news" },
      { image: "../../assets/svg/notes.svg", text: "笔记", link: "../news/index?type=notes" },
      { image: "../../assets/svg/cv.svg", text: "简历", link: "../cv/index" },
    ]
  },
  onLoad() {
    const _this = this;
    wx.getSystemInfo({
      success(res) {
        const { statusBarHeight, windowWidth, windowHeight } = res;
        _this.setData({ statusBarHeight, windowWidth, windowHeight })

        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.statusBarHeight)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  }
})
