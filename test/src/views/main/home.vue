<!--  -->
<template>
    <div class="home">
       <div class="tou">
          <router-link to="/main/home/type"><span>推荐</span></router-link>
          <router-link to="/main/home"><span>关注</span></router-link>
          <router-link to="/main/home"><span>热榜</span></router-link>
       </div>
       <div class="count">
         <router-view/>
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
  .home{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    .tou{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        line-height: 30px;
        border-bottom: 1px solid #eee;
        span{
          color: #000;
        }
    }
    .count{
      flex: 1;
    }
    
  }
</style>