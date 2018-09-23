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

           <button @click="handelChangeAppName">修改APPName</button>
           <p> 动态添加state的属性 --> {{appVersion}} </p>
           <p> 修改state值之mapMutations --> {{appName2}} </p>

           <button @click="changeUserName">修改用户名</button>
           <p> {{ userName3 }}</p>

            <button @click="regModules">动态注册模板</button>
            <p v-for="(li,index) in todoList " :key="index">{{li}} </p>
    </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState } from 'vuex' // ES6中解构赋值 { }
// import { createNamespacedHelpers } from 'vuex'   

// const { mapState } =createNamespacedHelpers('user')  // 在模快中添加命名空间，
import {mapGetters ,mapMutations,mapActions } from 'vuex'

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
           appVersion: state => state.appVersion,
           todoList: state => state.user.todo? state.user.todo.todoList:[]
         }),
        ...mapState('user',{
            userName2:state => state.userName2,  // 获取模块内的state值
            userName3:state => state.userName3
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
      ...mapMutations([
          'SET_APP_NAME2'
      ]) ,
       ...mapMutations('user',[
          'SET_USER_NAME'
      ]) ,
      ...mapActions([
          'updateAppName'
      ]),
      handelInput(val){
         this.inputValue=val
      },
      handelChangeAppName(){
        // this.$store.commit('SET_APP_NAME','Leo..Leo')
         this.$store.commit({
             type:'SET_APP_NAME',
             appName:'LeoNew'
         })
     this.SET_APP_NAME2('Leo2-这是通过mapMutations提交改变state的值')
        this.$store.commit('SET_APP_VERSION')
      },
      changeUserName(){
         this.SET_USER_NAME('Ruisizheng-Change')
        // this.updateAppName()  // 触发Action 的方法 1
         this.$store.dispatch('updateAppName') // 触发Action的方法2，通过 store实例的dispatch 方法
      },
      regModules(){
        this.$store.registerModule(['user','todo'],{ state:{  // 模块内注册模板
          todoList:[
              '学习mutations',
              '学习actions'
          ]
        }})
      }
    }
}
</script>

