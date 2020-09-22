<template>
    <div>
        layout

        <router-view></router-view>


        <ul class="nav-bar">
            <!-- 导航标签可以动态生成 -->
            <li v-for="(item,index) in navs" :key="index">
                <router-link :to="item.path">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs:[{
                path:"/index",
                title:"首页"
            },{
                path:"/find",
                title:"发现"
            },{
                path:"/order",
                title:"订单"
            },{
                title:"我的",
                path:"/mine"
            }]
        }
    }
}
</script>
<style lang="">
    .nav-bar{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>