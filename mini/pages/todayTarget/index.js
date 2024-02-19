// pages/todayTarget/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: [1],
    list: []
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  async Listdata() {
    const that = this;
    const res = await app.call({
      name: 'wishes-520',
      data: {
        type: 'getTodayTargets',
        data: {}
      }
    })
    that.setData({
      list: res.data.data
    })
    wx.stopPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.Listdata();
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
    this.Listdata();
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