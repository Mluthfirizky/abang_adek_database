<template>
  <div class="view">
      <view-car :edit="'edit'" :collection="'mobil'"></view-car>
  </div>
</template>

<script>
import viewCar from '../components/ViewCar.vue'
export default {
    components: {
        viewCar
    }
}
</script>

<style>

</style>