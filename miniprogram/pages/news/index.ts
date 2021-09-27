import { PageType, getPageTypeString } from '../../utils/util';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options: { type: PageType }) {
        const { type } = options;
        const _this = this;

        wx.setNavigationBarTitle({
            title: getPageTypeString(type)
        });

        wx.request({
            url: "https://www.wuliff.com/api/news/queryList.json?menuType=" + type,
            success({ data }) {
                console.log(data);
                _this.setData({ list: data.data });
            }
        })
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