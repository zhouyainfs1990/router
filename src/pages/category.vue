<template>
    <div>
        cartgory
        <router-link to="/cate/2">cate/2</router-link>
        <ul>
            <li v-for="(item,index) in cateList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cateList:[]
        }
    },
    watch:{
        "$route" (newVal){
            let {cateid} = newVal.params;
            setTimeout(()=>{
                if(cateid ==1){
                    this.cateList = [{
                        id:1,
                        name:"apple"
                    },{
                        id:2,
                        name:"oppo"
                    }]
                }else if(cateid ==2){
                    this.cateList = [{
                        id:1,
                        name:"TCL"
                    },{
                        id:2,
                        name:"xiaomi"
                    }]
                }
                
            },500)
        }
    },
    mounted(){
        // 当前页面的路由对象
        console.log(this.$route);
        console.log(this.$route.params.cateid);

        let {cateid} = this.$route.params;
        setTimeout(()=>{
            if(cateid ==1){
                this.cateList = [{
                    id:1,
                    name:"apple"
                },{
                    id:2,
                    name:"oppo"
                }]
            }else if(cateid ==2){
                this.cateList = [{
                    id:1,
                    name:"TCL"
                },{
                    id:2,
                    name:"xiaomi"
                }]
            }
            
        },500)

    }
}
</script>