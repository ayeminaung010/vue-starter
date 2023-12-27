<template>
  <div class="home">
    <FliterNav @fliter="current=$event" :current="current" ></FliterNav>
    <div v-for="project in filteredProjects" :key="project.id" class="">
      <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>

import FliterNav from '../components/FliterNav'
import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    FliterNav,
    SingleProject,
  },
  data(){
    return {
      projects : [],
      current: 'all',
    }
  },
  methods: {
    deleteProject(id){
      this.projects = this.projects.filter((project) => {
        return  project.id !== id;
      })
    },
    completeProject(id){
      const findProject = this.projects.find((project) => {
        return project.id === id
      })
      findProject.complete = !findProject.complete
    }
  },
  computed: {
    filteredProjects(){
      if(this.current === 'ongoing'){
        return this.projects.filter((d) => d.complete === false)
      }else if(this.current === 'complete'){
        return this.projects.filter((d) => d.complete === true)
      }{
        return this.projects;
      }
    }
  },
  mounted(){
    fetch("http://localhost:3000/projects")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.projects = data
      
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>
