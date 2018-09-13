<template>
  <div> 
    {{name}} 
    </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:'Leo.Rui'
    }
  },
   // 当前路由改变是,组件被复用是 调用此守卫
  beforeRouteUpdate(to,from,next){
    console.log(to.name,from.name)
  }
}
</script>


