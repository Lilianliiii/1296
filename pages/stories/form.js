// pages/stories/new.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    formTitle: "",
    formDescription: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    // console.log("options:", options)

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
    this.resetForm()
    const page = this
    const id = wx.getStorageSync('id') // Getting the id from show page and setStorageSync
    console.log("id:", id)

    if ('id') {
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${id}`,
        success(res) {
          console.log("res:", res)
          page.setData({
            formTitle: res.data.title,
            formDescription:res.data.description,
            id: res.data.id
          })
          wx.removeStorageSync('id')
        }
      })
    }
  },

  resetForm() {
    this.setData({formTitle: "", formDescription: ""})
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
    const story = e.detail.value
    const page = this
    // console.log("story:", story)
    // console.log("id:", this.data.id)
    // const id = this.data.id

    if (this.data.id) {
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${page.data.id}`,
        method: 'PUT',
        data: { story: story },
        success(res) {
          console.log("update success res:", res)
          wx.showToast({
              title: "Story Updated",
              duration: 2000
            }, wx.switchTab({
              url: '/pages/stories/index',
            }))
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:3000/api/v1/stories',
        method: 'POST',
        data: { story: story },
        success(res) {
          console.log("create succcess res:", res)
          if (res.statusCode === 422) {
            wx.showModal({
              confirmText: 'Ok',
              content: res.data.errors.join(', '),
              showCancel: false,
              title: 'Error!',
            })
          } else {
            wx.switchTab({
              url: '/pages/stories/index',
            })
          }
        }
      })
    }

    // console.log("story", e.detail.value)
    // console.log("stories", app.globalData.stories)
    // const story = e.detail.value
    // const stories = app.globalData.stories
    // stories.push(story)
    // app.globalData.stories = stories
    // wx.showToast({
    //   title: "Story Added",
    //   duration: 2000
    // }, wx.switchTab({
    //   url: '/pages/stories/index',
    // }))
  }
})