<!--  -->
<template>
    <div class="box">
        <div class="xiang" @click="inxiang(lis.id)" v-for="(lis,index) in list" :key="index">
              <div class="cont">
                  <h4>{{lis.title}}</h4>
                  <p class="wen">{{lis.description}}</p>
                  <p><span>{{lis.comment}}赞</span><span>{{lis.favor}}</span></p>
              </div>
              <div class="img">
                  <img class="tu" :src="lis.img" alt="">
              </div>
              
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import '../../../mock/mock'
// import {mapActions,mapState} from 'vuex'
export default {
  data() {
    return {
            list:[],
            page: 1,
            pageSize: 10,
            type: ''
    };
  },
  watch:{
    $route:function(){
      console.log(this.$route.params['type'])
      this.type=this.$route.params['type'];
      console.log(this.type)
      this.getData()
    },
  },
  methods:{
    async getData(){
      let data=await axios.get(`/api/list?type=${this.type}&page=${this.page}&pageSize=10`)
      this.list=data.data
      console.log(this.list);
    },
    inxiang(id){
      this.$router.push(`/detail/${id}`)
    }
  },
  mounted(){
    this.type=this.$route.params['type']
    this.getData();
  }
}

</script>
<style lang='scss' scoped>
  .box{
    width: 100%;
    height: 100%;
    background: #eee;
    overflow: auto;
    .xiang{
      width: 100%;
      height: 160px;
      background: #fff;
      margin-top: 5px;
      display: flex;
      .cont{
        width: 70%;
        height: 100%;
        .wen{
          width: 100%;
          height: 110px;
          overflow: hidden;
        }
      }
      .img{
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        .tu{
     
        }
      }
    }
    
  }
</style>