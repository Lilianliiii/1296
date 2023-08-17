// pages/stories/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  editStory() {
    console.log("data:", this.data)
    console.log("story:", this.data.story)
    const id = this.data.story.id
    wx.setStorageSync('id', id) // Setting id as storage so it is persisted and we can access it on the form page

    wx.switchTab({
      url: '/pages/stories/form',
    })
  },

  deleteStory() {
    console.log("story:", this.data.story)
    const id = this.data.story.id
    wx.showModal({
      cancelText: 'No',
      confirmText: 'Yes',
      content: 'Are you sure you want to delete this story?',
      showCancel: true,
      title: 'Are you sure?',
      complete: (res) => {
        if (res.confirm) {
          wx.request({
            url: `http://localhost:3000/api/v1/stories/${id}`,
            method: 'DELETE',
            success(res) {
              console.log("res", res)
              wx.switchTab({
                url: '/pages/stories/index',
              })
            }
          })
        }
      },
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log("stories show page options:", options)
    const id = options.id
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      success(res) {
        console.log("res:", res)
        page.setData({
          story: res.data
        })
      }
    })
    // console.log("app:", app)
    // const story = app.globalData.stories[parseInt(options.index)]
    // this.setData({
    //   story: story
    // })
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

  }
})