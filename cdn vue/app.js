const app = Vue.createApp({
    data() {
        return {
            url : 'http://www.google.com',
            showBooks: true,
            title : 'I am the empire',
            author : 'aye min aung',
            age : 25
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        changeShow(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e);
        }
    },
});

app.mount("#app")