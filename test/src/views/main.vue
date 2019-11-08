<template>
    <div class="main">      
        <div class="cont">
            <router-view/>
        </div>
        <div class="nav">
            <router-link to="/main/home"><span>圈子</span></router-link>
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
                background: yellow;
            }
            .nav{
                width: 100%;
                height: 30px;
                background: #fff;
                display: flex;
                justify-content: space-around;
                line-height: 30px;
            }
        }
</style>