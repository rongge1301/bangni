let vm = new Vue({
    el:"main",
    data(){
        return {
            categoryList:[],
            categoryTreeList:[],
            productList:[]
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
                this.categoryList = res.data.data;
                for (let i = 0; i < this.categoryList.length; i++) {
                    if (this.categoryList[i].id === 'gu16MRzrk') {
                        this.productList = this.categoryList[i].children;
                    }
                }
            })
        }
    }
})
