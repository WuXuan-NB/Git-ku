<template>
    <div class="main">      
        <div class="cont">
            <router-view/>
        </div>
        <div class="nav">
            <router-link to="/main/home"><span class="quan">圈子</span></router-link>
            <router-link to="/main/my"><span class="quan">我的</span></router-link>
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
                overflow: auto;
            }
            .nav{
                width: 100%;
                height: 30px;
                background: #fff;
                display: flex;
                justify-content: space-around;
                line-height: 30px;
               .quan{
                   display: block;
                   width: 186.5px;
                   height: 100%;
                   text-align: center;
                   border-right: 1px solid #ccc;
                   color: #000
               }
            }
        }
        .active{}
</style>