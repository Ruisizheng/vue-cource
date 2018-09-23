<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handelclick('back')"> 返回上一页</button>
    <button @click="handelclick('push')"> 跳转页面</button>
     <button @click="handelclick('replace')"> 替换页面</button>

   
     <b>{{ food }}</b>

     <button @click="getInfo">请求数据</button>
     
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUserInfo} from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props:{
    food:{
      type:String,
      default:'daXiGua'
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...组件内的守卫  ,组件加载之前调用
    console.log('这个时候组件还未被渲染是调用这个守卫...')
    next(vm=>{
      console.log(vm)     
    })
  },
  beforeRouteLeave (to, from, next) {
    // ...组件离开之前调用
    const leave=confirm("确认离开当前页面吗?")
    if(leave) next()
    else next(false)
  },
  methods: {
   handelclick(type){
     if( type == 'back') this.$router.back()
     else if (type == 'push'){
       const name='leo.rui...'
            // this.$router.push({
            //       path: `/argu/${name}`     // ES6中的模板语法 写法. 
            //                                 // 注意：如果提供了 path，params 会被忽略 你需要提供路由的 name 或手写完整的带有参数的 path
            //     })
          this.$router.push({
            name:'argu',
            params:{
              name:name
            }
          })

     }
     else if (type == 'replace') this.$router.replace({
       name:'about'
     })
   },
   getInfo(){
     // 此处请求 对axios 封装后的数据请求，返回Promise 对象的处理
      getUserInfo({ userId:21 }).then(res=>console.log('服务返回res： =>'+res)).catch(
        error => {
          console.log('服务异常Home.vue页面：'+error)
        }
      )
   }
  }
}
</script>
