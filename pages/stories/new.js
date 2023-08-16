// pages/stories/new.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  submit(e) {
    // console.log("event:", e)
    console.log("story", e.detail.value)
    console.log("stories", app.globalData.stories)
    const story = e.detail.value
    const stories = app.globalData.stories
    stories.push(story)
    app.globalData.stories = stories
    wx.showToast({
      title: "Story Added",
      duration: 2000
    }, wx.switchTab({
      url: '/pages/stories/index',
    }))
  }
})