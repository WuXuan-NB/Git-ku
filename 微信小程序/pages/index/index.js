const app=getApp()

Page({
  data:{
    banners:[
      '/assets/wallhaven-4de89j.jpg',
      '/assets/wallhaven-6q5de6.jpg',
      '/assets/wallhaven-6qgpkw.jpg'
    ],
    list:[
      {
        id:1,
        title:"雏田",
        img:'/assets/wallhaven-4de89j.jpg'
      }, {
        id: 1,
        title: "雏田",
        img: '/assets/wallhaven-4de89j.jpg'
      }, {
        id: 1,
        title: "雏田",
        img: '/assets/wallhaven-4de89j.jpg'
      }, {
        id: 1,
        title: "雏田",
        img: '/assets/wallhaven-4de89j.jpg'
      }
    ]
  },
  goDetail(e){
    console.log('e...', e);
    let {id} = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/index2/index?id='+id });
  },
  goFavor(){
    wx.navigateTo({ url: '/pages/index3/index'});
  },
  goHistory(){
    wx.navigateTo({ url: '/pages/index3/index'});
  }
})
