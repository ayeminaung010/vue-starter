<template>
  <h1>{{ title }}</h1>

  <Modal />
</template>

<script>
import Modal from './components/ModalDialog.vue';

export default {
  name: 'App',
  components: { Modal },
  data (){
    return {
      title : 'My first Vue app :>'
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs);
      this.$refs.name.classList.add("active")
      this.$refs.name.focus();
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
