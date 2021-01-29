let vm = new Vue({
    el:"main",
    data(){
        return {
            categoryList:[],
            categoryTreeList:[],
            productList:[],
            test:"hello world"
        }
    },
    mounted(){
        this.getCategoryTreeList()
        this.getContentList()
        this.getCurrentCategoriesById()
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
                this.categoryList = res.data.data;
                for (let i = 0; i < this.categoryList.length; i++) {
                    if (this.categoryList[i].id === 'gu16MRzrk') {
                        this.productList = this.categoryList[i].children;
                    }
                }
                console.log(this.productList)
            })
        },
        getContentList(){
            axios({
                url:'/api/content/getList'
            }).then(res => {

            })
        },
        getCurrentCategoriesById(){
            axios.get('/api/contentCategory/getCurrentCategoriesById', {
                params: {
                    typeId:"gu16MRzrk"
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})
