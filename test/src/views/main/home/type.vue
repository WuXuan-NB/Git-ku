<!--  -->
<template>
    <div>
        <div v-for="(lis,index) in list" :key="index">
          {{lis.img}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import '../../../mock/mock'
export default {
  data () {
    return {
      list:[]
    };
  },
  created(){
    axios.get("/list").then(res=>{
      // console.log(res);
        this.list=res.data.list
        console.log(this.list);
        
    })
  }
}

</script>
<style lang='scss' scoped>

</style>