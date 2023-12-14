<template>
    <h4>Job detail page </h4>
    <div class="">
        <span>Job title - {{ job?.title }}</span> <br>
        <span>Job detail - {{ job?.detail }}</span>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            job : null
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs/" + this.id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.job = data;
        })
        .catch((errr) => {
            console.log(errr);
        })
    }
}
</script>

<style>
    
</style>