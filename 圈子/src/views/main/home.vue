<template>
    <div class="quan">
        <div class="sreach">
            <div class="set">↑</div>
            <div class="sou"><input type="text" placeholder="搜索一下朋友近况如何？"></div>
            <div class="btn">搜索</div>
        </div>
        <div class="cont">
            <div class="noth" v-for="(lis,index) in list" :key="index">
                <div class="tou">
                  <p class="touxiang">头像</p>
                 <div class="namelist">
                      <p class="name">小王</p>
                      <p class="time">2013-06-10</p>
                  </div>
                  
                </div>
                <div class="cout">
                    <p>{{lis.dynamicContent}}</p>
                    <p class="img">
                      <img src="../../assets/1.jpg" alt="">
                    </p>
                </div>
                <p class="commit">
                    <span class="commitname">{{lis.userName}}</span>:你确定？wdnmd
                </p>
                <p class="di"><img src="../../assets/dianzan.png" alt=""><img src="../../assets/pinglun.png" alt=""></p>
            </div>

            <div class="noth">
                <div class="tou">
                  <p class="touxiang">头像</p>
                 <div class="namelist">
                      <p class="name">小王</p>
                      <p class="time">2013-06-10</p>
                  </div>
                  
                </div>
                <p class="cout">
                   岸边本人也在韬晦与妥协中摇摆，看过结局的人恐怕也有不同的声音，一种认为终究回到了老路，那条青春热血铺就的前方；一种认为偏离了人心，那条阴谋与欲望交织的未来。

                  笔者无能力对此予以解读，毕竟不在其位，不解其惑是也。岸本恐怕也有很多的不由己，面对这个欲言又止首鼠两端的结局，除了一声叹息还有什么可说的呢，想必队长@SWATLLYO跟一帮档案吧基友团们对此心有戚戚焉。
                </p>
                <p class="commit">
                   
                </p>
                <p class="di"><img src="../../assets/dianzan.png" alt=""><img src="../../assets/pinglun.png" alt=""></p>
            </div>

            <div class="noth">
                <div class="tou">
                  <p class="touxiang">头像</p>
                  <div class="namelist">
                      <p class="name">小王</p>
                      <p class="time">2013-06-10</p>
                  </div>
                  
                </div>
                <div class="cout">
                    <!-- 如果火影有一个第一视角的话，它不会是两个主角在走的道路，而是看着他们走在自己曾经走过的道路 -->
                    <p>如果火影有一个第一视角的话，它不会是两个主角在走的道路，而是看着他们走在自己曾经走过的道路</p>
                    <p class="img">
                      <img src="../../assets/2.jpg" alt="">
                    </p>
                </div>
                <p class="commit">
                    <span class="commitname">小花</span>:卡殿牛B！
                </p>
                <p class="di"><img src="../../assets/dianzan.png" alt=""><img src="../../assets/pinglun.png" alt=""></p>
            </div>

            
        </div>
    </div>
</template>

<script>
// import {mapState,mapActions} from 'vuex';
// // import {showDynamic} from '../../serve/index'
// export default {
//   data () {
//     return {
        
//     };
//   },
//   created(){
//       this.getlist()
//       // console.log(list);
      
//   },
//   computed:{
//     ...mapState({
//        list:state=>state.home.list
//     })
//   },
//   methods:{
//     ...mapActions({
//         getlist:"home/getHome"
//     })
//   //  async getlist(){
//   //       let data = await showDynamic();
//   //       this.list=data.data.data
//   //       console.log('data....', this.list);
//   //   }
//   }
  
// }


import {mapState, mapActions} from 'vuex';
// import Reply from '@/components/reply.vue';

export default {
    // components: {
    //     Reply
    // },
    computed: {
        ...mapState({
            list: state=>state.home.list
        })
    },
    methods: {
        ...mapActions({
            getlist: 'home/getHome'
        })
    },
    created(){
        this.getlist();
    }
}
</script>
<style lang='scss' scoped>
    .quan{
      width: 100%;
      height: 100%;
      background: #eee;
      overflow: auto;
      .sreach{
        width: 100%;
        height: 30px;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #ccc;
        .set{
            width: 20px;
            height: 20px;
            margin: 5px;
            background: #eee;
            text-align: center;

          }
          .sou{
            flex: 1;
            input{
              width:250px;
              height: 20px;
              background: #eee;
              border-radius: 5px;
              border: 1px solid #ccc;
              margin-top:4px;
            }
          }
      }
      .btn{
        width: 50px;
        height: 20px;
        background: #eee;
        border-radius: 5px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        margin: 5px 20px 5px 5px;
      }
      .cont{
        background: #fff;
        font-family:"黑体";
        font-size: 14px;
        overflow: auto;
        .noth{
          border-bottom: 1px solid #eee;
          margin: 10px;
            .tou{
                width: 100%;
                height: 40px;
                background: #fff;
                display: flex;
                .time{
                    color: #ccc;
                    font-size: 12px;
                }
                .touxiang{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: skyblue;
                    text-align: center;
                    line-height: 30px;
                    font-size: 12px;
                    color: #fff;
                    // margin-top: 5px;
                }
                .namelist{
                  .name{
                    font-size: 12px;
                    font-family:"微软雅黑";
                  }
                }
              }
              .name{
                font-size: 14px;
              }
              .cout{
                background: #eee;
                border-radius: 5px;
                padding: 3px;
                .img{
                  width: 220px;
                  height: 150px;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
              }
              .commit{
                background: #fff;
                font-size: 10px;
                margin-top: 5px;
                .commitname{
                  color: blue
                }
              }
              .di{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                img{
                  width: 20px;
                  height: 20px;
                }
              }
           }
        }
        
    }
  
</style>