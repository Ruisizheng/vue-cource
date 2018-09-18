<template>
    <input @input="handelInput" :value="value"/>
</template>
<script>
export default {
    name:'AInput',
    props:{
        value:{
            type:[String,Number],
            default:''
        }
    },
    methods:{
        handelInput(event){
            const value=event.target.value
            this.$emit('input',value)
        }
    }
}
</script>
