<template>
  <div>
      <new-car :collection="'terjual'"></new-car>
  </div>
</template>

<script>
import newCar from '../components/NewCar.vue'
export default {
    components: {
        newCar
    }
}
</script>

<style>

</style>