<template>
    <div>
        login

        <button @click="toIndex">/</button>
        <button @click="back">back</button>
    </div>
</template>
<script>
export default {
    mounted(){
        // 编程式导航

        // console.log(this.$router);

        /* setTimeout(()=>{
            this.$router.push("/")
        },2000) */
    },
    methods:{
        toIndex(){
            // this.$router : 应用的路由器对象，使用这个对象来导航

            // 导航并添加导航历史
            // this.$router.push("/");


            this.$router.push({path:"/"});

            // 导航并添加替换历史
            // this.$router.replace("/");


            
            
        },
        back(){
            // 前进一份记录
            // this.$router.forward();
            // 后退
            // this.$router.back()


            // 前进（正数）或者后退（后退）若干记录
            // this.$router.go(1);
        }
    }

}
</script>