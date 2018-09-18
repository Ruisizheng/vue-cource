<template>
  <div class="email">
    email:1003998706@qq.com
    <button @click="handelClick">点我</button>
  </div>
</template>
<script>
export default {
  methods:{
      handelClick(){
        this.$bus.$emit('on-click','Hello,World...')
      }
  },
  mounted() {
    
  },
}
</script>
<style>
 .email{
   border: 1px solid green
 }
</style>
