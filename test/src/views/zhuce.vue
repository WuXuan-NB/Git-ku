<template>
    <div class="login">
         <div class="top">
             注册
         </div>
         <p class="inp1"><input type="text" placeholder="请输入账号" v-model="userName"></p>
         <p class="inp2"><input type="text" placeholder="请输入密码" v-model="userPwd"></p>
         <button class="btn" @click="zhuce()">注册</button>
    </div>
</template>

<script>
import {register} from '../serve/index'
export default {
  data () {
    return {
      userName:"",
      userPwd:""
    };
  },
  methods:{
   async zhuce(){
           let {userName, userPwd} = this;
            let res = await register({userName, userPwd})
            console.log('res...', res);
            if(res.status===200){
                this.$router.push({
                    path:"/login"
                })
            }
        }
  }
}

</script>
<style lang='scss' scoped>
    .login{
        width: 100%;
        height: 100%;
        text-align: center;
        .top{
            width: 100%;
            background: #eee;
            height: 30px;
            text-align: center;
            line-height: 30px;
        }
        .inp1{
            width: 100%;
            height: 30px;
            margin-top: 10px;
            // border: 1px solid #ccc;
            input{
                 width: 360px;
                height: 100%;
            }
        }
        .inp2{
            width: 100%;
            height: 30px;
            // border: 1px solid #ccc;
            margin-top: 15px;
            input{
                width: 360px;
                height: 100%;
            }
        }
        .btn{
            width: 325px;
            height: 30px;
            margin: 20px;
            background: orange;
            border: 1px solid #ccc;
        }
    }
</style>