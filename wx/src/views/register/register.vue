<!--  -->
<template>
    <div class="register">
            <h4>注册</h4>
            <p><input type="text" placeholder="请输入账号" v-model="userName"></p>
            <p><input type="text" placeholder="请输入密码" v-model="userPwd"></p>
            <button @click="register()">注册</button>
    </div>  
</template>

<script>
import {register} from '../../api/api'
export default {
  data () {
    return {
        userName:"",
        userPwd:""
    };
  },
  methods:{
     async register(){
            let {userName, userPwd} = this;
            let result = await register({userName, userPwd})
            console.log('result...', result);
            // if (result && result.data.code === 0){
            //     alert(result.data.msg)
            // }else{
            //     window.history.back();
            // }
        }
  }
}

</script>
<style lang='scss' scoped>

</style>