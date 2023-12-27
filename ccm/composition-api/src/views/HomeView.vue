<template>
  <div class="home">
    home

    <h5>hello i'm {{ name }} age is {{ age }}</h5>
    <button @click="handleClick">click me</button>
    <button @click="age++">increase age</button>

    <h1>search</h1>
    <input type="text" v-model="search">
    <div class="">
      search key -{{ search }}
    </div>
    <div class="" v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup(){
    const name = ref("Aye Min Aung");
    const age = ref(21);
    const search = ref("");
    const names = ref(["ayeaye","mg mg",'kyaw kyaw','koko'])
    const handleClick =() => {
      name.value = "Kyaw Gyi"
    }
    const filteredNames = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value)
      })
    })
    return {name,age,handleClick,names,search,filteredNames}
  }
}
</script>
