<template>
    <div>
        <a-input @input="handelInput"/>
        <p>  {{inputValue}} --> 通过计算属性实时获取最后一个字母是: {{ inputValueLastLetter }}</p>
         <a-show :content="inputValue"/>
         <P>appName: {{appName}} --> getters 获取值：{{ appNameWithVersion}}</P>
          <P>通过解构赋值获取state值(数组): {{appName2}}</P>
           <P>通过解构赋值获取state(对象): {{appName3}}</P>
          <P>userName: {{userName}} --> 名字的第一个字是：{{firstLetter}}</P>
           <P>userName2: {{userName2}}</P>
    </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState } from 'vuex' // ES6中解构赋值 { }
// import { createNamespacedHelpers } from 'vuex'   

// const { mapState } =createNamespacedHelpers('user')  // 在模快中添加命名空间，
import {mapGetters } from 'vuex'

export default {
    name:'store',
    data(){
       return {
           inputValue:''
       }
    },
    components:{
        AInput,
        AShow
    },
    computed:{
        // 通过计算属性获取vuex的state 值

         ...mapState([ // ES展开操作符
          'appName2'
         ]),
         ...mapState({
           appName3:state => state.appName3,
         }),
        ...mapState('user',{
            userName2:state => state.userName2  // 获取模块内的state值
        }),

        appName(){
            return  this.$store.state.appName      
        },
        userName()
        {
            return this.$store.state.user.userName
        },
        appNameWithVersion(){
           return this.$store.getters.appNameWithVersion
        },

       ...mapGetters('user',[
           'firstLetter'
       ]),
        inputValueLastLetter(){
            return this.inputValue.substr(-1,1)
        }
        
    },
    methods:{
      handelInput(val){
         this.inputValue=val
      }
    }
}
</script>

