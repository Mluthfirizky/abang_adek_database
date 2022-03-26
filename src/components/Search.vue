<template>
      <div class="search">
        <div class="search-content">
            <img src="../assets/search.png" alt="">
            <input v-model="search" type="text" placeholder="Cari nama mobil....">           
            {{search}} 
        </div>

        <div class="cancel">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        searchValue: String
    },
    data(){
        return{
            search: this.searchValue
        }
    }
}
</script>

<style>

</style>