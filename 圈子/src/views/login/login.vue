<!--  -->
<template>
    <div class="login">
        <h4>登录</h4>
        <p><input type="text" placeholder="输入账号" v-model="user"></p>
        <p><input type="password" placeholder="输入密码" v-model="paw"></p>
        <button @click="log()">登录</button>
    </div>
</template>

<script>
import {login} from '../../api/api';
import axios from 'axios';
export default {
  data () {
    return {
        user:"",
        paw:""
    };
  },
  methods:{
    async log(){
        try{
            let res=await login({userName:this.user,password:this.paw})
            console.log(res);
            
        }catch{
            if (e.response.data.code === 0) {
                console.log("错误");
                
            console.log(e.response.data);
            // this.$toast(e.response.data.msg,3500);  
            // this.$router.push({path: "/zhuce"}); 
        }
        }
    //     axios.post('/api/user/login',{userName:this.user,password:this.paw}).then((res)=>{
    //       console.log(res);
    //       console.log(window.localStorage)
    //        this.$router.push({path:"/index/home"})
    //         }).catch(()=>{
    //         console.log("用户信息错误")
    //         let bool= window.confirm("跳转到注册页面？")
    //         if(bool){
    //             this.$router.push({path:"/zhuce"})
    //         }else{
                
    //      }
    //   })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>