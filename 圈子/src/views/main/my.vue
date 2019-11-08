<template>
    <div class="my">
        <div class="mytop">我的</div>
        <div class="mytou">
          
        </div>
        <div class="mymain">
          <p><span>个人信息</span><span>></span></p>
          <p><span>我的评论</span><span>></span></p>
          <p><span>个人收藏</span><span>></span></p>
        </div>
        <div class="myfoot">
          <p>修改密码</p>
          <p>退出</p>
          <p>注销用户</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    };
  }
}

</script>
<style lang='scss' scoped>
    .my{
      width: 100%;
      height: 100%;
      background: #eee;
      .mytop{
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #fff;
        color: #000;
      }
      .mytou{
        width: 100%;
        height: 100px;
        background: #f76968;
      }
      .mymain{
        width: 100%;
        height: 100px;
        background: #fff;
        margin-top: 20px;
        line-height: 32px;
        
        // flex-direction: column;
        p{
            display: flex;
            justify-content: space-between;
        }
        
      }
      .myfoot{
        width: 100%;
        height: 100px;
        margin-top: 20px;
        background: #fff;
        line-height: 32px;
      }
    }
</style>