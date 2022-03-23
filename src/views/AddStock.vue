<template>
  <div>
      <new-car :collection="'mobil'"></new-car>
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