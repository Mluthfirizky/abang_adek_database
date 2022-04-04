<template>
  <div>
      <view-car :edit="'edit-terjual'" :collection="'terjual'"></view-car>
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