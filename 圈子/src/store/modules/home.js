import { showDynamic } from '../../serve/index'

const state={
    list:[]
}

const mutations={
    updataList(state,payload){
        state.list=payload;
    }
}

const actions ={
    async getHome(context){
        let data =await showDynamic();
        console.log(data)
        context.commit("updataList",data.data.data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}