<template>
  <h5>Job view page</h5>
  <div class="" v-for="job in jobs" :key="job">
    <router-link :to="{name:'job-details',params:{id:job.id}}"> 
        <h4>{{ job.title }}</h4>
    </router-link>
  </div>    
</template>

<script>
export default {
    data(){
        return{
            jobs: []
        }
    },
    mounted(){
        fetch("http://localhost:3000/jobs")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.jobs = data;
        })
        .catch((errr) => {
            console.log(errr);
        })
    }
}
</script>

<style>
    h4{
        color: green;
        cursor: pointer;
    }
</style>