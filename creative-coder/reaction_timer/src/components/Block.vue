<template>
    <div  class="block" v-if="showBlock" @click="endTimer">
        <h2>Click me {{ delay }}</h2>
    </div>
</template>

<script>
export default {
    // name: 'block'
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            score: 0,
            timer : null,
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock = true
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer(){
            this.timer=setInterval(() => {
                this.score += 50;
            },50)
        },
        endTimer() {
            clearInterval(this.timer);
            this.$emit("endGame",this.score)
        }
    }
}
</script>

<style>
.block{
    background-color: aqua;
    width: 400px;
    height: 300px;
    margin: 10px auto;
    padding-top:  30px;
}
</style>