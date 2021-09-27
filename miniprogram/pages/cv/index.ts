// pages/cv/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: {
            name: "柚子青年。",
            job: "求职⽬标: WEB前端开发 | 4年工作经验"
        },
        contact: [
            { image: "../../assets/svg/phone.svg", text: "19926450261(wx同号)" },
            { image: "../../assets/svg/email.svg", text: "2361846314@qq.com" },
            { image: "../../assets/svg/youzi.svg", text: "https://wuliff.com" },
            { image: "../../assets/svg/github.svg", text: "https://github.com/youzi20" }
        ],
        skill: [
            "1. 掌握JavaScript函数式编程以及面向对象编程，了解ECMAScript语法新特性，对抽象、继承、封装有自己的理解。",
            "2. 掌握canvas、svg绘图，webSocket数据通信。",
            "3. 掌握React、Vue以及常用框架和UI库，掌握模块化开发。掌握hooks，hoc，context常用规范。",
            "4. 熟练使用Git常用命令，有使用jenkins进行自动化CI/CD。",
            "5. 熟练使用nodejs(EggJS)，有写过一些轻量中间件例如登录拦截。",
            "6. 其他技能：webpack、npm、sass"
        ],
        work: [
            {
                name: "阿里外包",
                time: "2020/5 - 2021/1",
                daily: ["日常项目开发，官网(https://onetouch.alibaba.com)、直播间以及运营后台的迭代维护，开发部分团队公共组件。"],
                highlight: [
                    "跨境物流官网，使用Formily表单框架解决原本需要多层参数透传的复杂交互。从首页查询器到查询页查询列表，最后下单环节的代码解耦复用，提升了代码可读性。",
                    "跨境供应链官网，重构公共Header，解决多子站共用Header的问题，方便运营统一配置。"
                ]
            },
            {
                name: "链向科技",
                time: "2017/11 - 2020/5",
                daily: ["项目框架选型、架构搭建，开发项目组件库，官网日常迭代维护以及行情展示K线图研发。"],
                highlight: [
                    "SOSOB，独立负责整个项目搭建（React+Netxjs），使用Nextjs作为网站的同构框架，在享受了MVVM的组件化开发也满足了网站SEO的要求，最后上线之后网站收录效果远超之前。开发了常用组件如：图片展示、列表分页、图表（折线图、饼状图、柱状图，由canvas, svg 绘制）以及MD编辑器。在开发编辑器时，因开源项目无法满足产品需求，于是进行源码修改，最后实现了产品需求。",
                    "K线，行情展示图是公司自主研发插件，由我一人完成。采用了ES6的class的编程方式，对其中的指标、工具、绘图进行抽象封装。并且提供了api供第三方接入使用。"
                ]
            },
            {
                name: "昊客网络科技",
                time: "2016/11 - 2017/07",
                desc: "主要进行甲方官网开发，由于时间久远，大部分网站都已经无法访问，所以不一一列出。"
            },
            {
                name: "个人博客",
                highlight: [
                    "博客主要采用了EggJS+React的方式开发，没有继续采用Nextjs是因为该框架有一些局限性，后期同构准备在EggJS这一块解决。博客管理后台使用的是React+Antd。静态资源目前已配置jenkins自动化，自动更新版本号发布静态文件。静态文件采用Nginx反向代理添加缓存，从而达到秒开的用户体验（第一次稍长）。"
                ]
            },
        ],
        evaluation: [
            "热爱编程，对前端有很浓烈的兴趣，也喜欢写一些交互效果以及一些小插件小轮子；",
            "性格外向，可以很快融入团队以及在产品功能上的交流对接；",
            "兴趣爱好：打羽毛球，听歌；"
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})