let vm = new Vue({
    el:"main",
    data(){
        return {
            categoryList:[]
        }
    },
    mounted(){
        this.getCategoryTreeList()
        this.getContentList()
    },
    methods:{
        getCategoryList(){
            axios({
                url:'/api/contentCategory/getList'
            }).then(res => {
                console.log(res.data)
            })
        },
        getCategoryTreeList(){
            axios({
                url:'/api/contentCategory/getTreelist'
            }).then(res => {
                console.log(res.data)
            })
        },
        getContentList(){
            axios({
                url:'/api/content/getList'
            }).then(res => {
                console.log(res.data)
            })
        }
    }
})
