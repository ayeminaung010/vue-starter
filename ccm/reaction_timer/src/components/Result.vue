<template>
  <p>Result is : {{ score }} ms</p>
  <div class="" v-if="score>250">
    <p>you are too fast</p>
  </div>
  <div class="" v-else-if="score>250 && score<500">
    <p>you are normal</p>
  </div>
  <div class="" v-else>
    <p>you are too slow.. please try again </p>
  </div>
</template>

<script>
export default {
    props: ['score']
}
</script>

<style>

</style>