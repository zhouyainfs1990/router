<template>
    <div>
        Index
        <router-link to="/login">login</router-link>
        <router-link to="/cate/1">/cate/1</router-link>
        <router-link to="/cate/2">/cate/2</router-link>
        <button @click="toCate">/cate/1</button>
        <button @click="toLogin">login</button>

        <br>

        <router-link to="/?a=1">/?a=1</router-link>
    </div>
</template>
<script>
export default {
    name:"",
    watch:{
        "$route"(newVal){
            console.log(newVal)
            console.log(newVal.query)
        }
    },
    methods:{
        toCate(){
            // this.$router.push("/cate/1")

            // this.$router.push({path:"/cate/1"});

            // 动态路由使用编程式导航，以对象形式传参，指定路由的name
            this.$router.push({name:"cate",params:{
                cateid:1
            }})
        },
        toLogin(){
            this.$router.push({name:"login"})
        }
    }
}
</script>