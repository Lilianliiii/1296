// pages/stories/index.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    name: 'Hanan',
    // stories: [
    //   { title: "WTF is OOP"},
    //   { title: "Nothing centers"},
    //   { title: "Syntax Error ARRGHH"},
    //   { title: "JS is the worst"}
    // ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // console.log("onLoad")
    // console.log("stories:", app.globalData.stories)
    // const stories = app.globalData.stories
    // this.setData({
    //   stories: stories
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    // console.log("onReady")
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    console.log("onShow")
    const page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      method: 'GET',
      success: (res) => {
        console.log("res:", res)
        page.setData({
          stories: res.data.stories
        })
      },
    })
    // const stories = app.globalData.stories
    // this.setData({
    //   stories: stories
    // })
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
  
  goToStory(e) {
    // console.log("goToStory event", e)
    // console.log("index", e.currentTarget.dataset.index)
    
    // Below to debug and see if we are getting the correct story
    // const story = this.data.stories[e.currentTarget.dataset.index]
    // console.log("story:", story)
    wx.navigateTo({
      url: `/pages/stories/show?id=${e.currentTarget.dataset.id}`,
    })
  }
})