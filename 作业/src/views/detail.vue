<!--  -->
<template>
    <div>
        detail
    </div>
</template>

<script>
export default {
  data () {
    return {
      // info:{}
    };
  },
  async created(){
    let id=this.$route.params.id;
    console.log(id);
    // this.info=data.data;

    
  }
}

</script>
<style lang='scss' scoped>

</style>