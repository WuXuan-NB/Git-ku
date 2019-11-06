<!--  -->
<template>
    <div class="main">
        <div class="cont">
          <router-view/>
        </div>
        <div class="foot">
            <router-link to="/main/home"><span>首页</span></router-link>
            <router-link to="/main/edu"><span>大学</span></router-link>
            <router-link to="/main/idea"><span>想法</span></router-link>
            <router-link to="/main/message"><span>消息</span></router-link>
            <router-link to="/main/my"><span>我的</span></router-link>
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
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .cont{
      flex: 1;
    }
    .foot{
      width: 100%;
      height: 50px;
      background: #eee;
      line-height: 50px;
      display: flex;
      justify-content: space-around;
      span{
        color: #000;
      }
    }
  }
</style>