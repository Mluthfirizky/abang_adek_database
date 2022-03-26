<template>
  <div class="home">
  <nav>
    <div class="nav-wrapper">
    <div class="search">
        <div class="search-content">
            <img src="../assets/search.png" alt="">
            <input @input="resultChange" v-model="searchValue" type="text" placeholder="Cari nama mobil....">            
        </div>
        <div @click="clear" class="cancel">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    <div @click="logout" class="signOut">Sign Out</div>
    <div class="type-wrapper">
        <div @click="page = false" :class="!page ? 'active-type' : 'unactive'" class="type">Stock</div>
        <div @click="page = true" :class="page ? 'active-type' : 'unactive'" class="type">Terjual</div>
    </div>
    </div>
  </nav>
    <stock v-if="page == false" class="dashboard"/>
    <terjual v-else class="dashboard"/>
    {{$store.getters.search}}
    <div @click="addBtn" class="add"><i class="fa-solid fa-plus"></i></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from '@/components/StockDashboard.vue'
import Terjual from '@/components/Terjual.vue'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

export default {
  name: 'Home',
  components: {
    Stock,
    Terjual
  },
  data(){
    return{
      searchValue: this.$store.getters.search,
      page: false
    }
  },
  methods: {
    clear(){
      this.$store.commit('changeValue', "")
      this.searchValue = this.$store.getters.search
    },
    resultChange(){
      this.$store.commit('changeValue', this.searchValue)
    },
    addBtn(){
      if(!this.page){
        this.$router.push('/new')
      }else{
        this.$router.push('/new-terjual')
      }
    },
    async logout(){
      this.$confirm('Are you sure want to Log out?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then( () => {
               const data = firebase.auth().signOut()
                console.log(data)
                this.$message({
                  type: 'success',
                  message: 'Loged Out'
                });          
                this.$router.replace({name: "Login"})
            }
        ).catch(() => {
          this.$message({
            type: 'info',
            message: 'Logout canceled'
          });          
        });

        }
  }
}
</script>

<style>
 .dashboard{
   padding-top: 170px;
   padding-left: 35px;
   padding-right: 40px;
   transition: 0.3s;
   
 }

  .type-wrapper{
    position: fixed;
    top: 75px;
    width:94.5%;
    left: 80px;
    transition: 0.3s;
    display: flex; 
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    justify-content: space-between;
  }
  .type{
    flex: 1;
    background: #F2F2F2;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;
    padding: 12px;
    border-bottom: 2px solid #DCDCDC;
  }
  .active-type{
    background: white;
  }
  .unactive:hover{
    background-color: rgb(250, 250, 250);
  }
  nav{
        position: fixed;
        z-index: 999;
        align-items: center;
        width: 94.5%;
        background-color: #F2F2F2;
        border-bottom: #DCDCDC 2px solid;
    }
    nav .nav-wrapper{
      display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav .search{
        width: 85%;
        display: flex;
        padding: 0 40px;
        justify-content: space-between;
    }
    .search-content{
        display: flex;
        align-items: center;
        gap: 30px;
        width: 100%;
        transition: 0.3s;
    }
    .search-content img{
      width: 20px;
      height: auto;
    }
    .cancel{
        display: flex;
        align-items: center;
        font-size: 1.3em;
        cursor: pointer;
    }
    .search-content input{
    background: none;
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    border: none;
    outline: none;
    letter-spacing: 0.03em;
    color: #3d3d3d;
    }
    nav .signOut{
        text-align: center;
        white-space: nowrap;
        width: 15%;
        font-size: 20px;
        cursor: pointer;
        padding: 23px;
        font-weight: 400;
        letter-spacing: 0.02em;
        transition: 0.2s;
        color: white;
        border-left: 2px solid #DCDCDC;
        background-color: #c03333;
    }
    .signOut:hover{
      background-color: #e23838;
    }
    .add{
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: 0.2s;
      width: 70px;
      height: 70px;
      border-radius: 100%;
      background-color: #202020;
      position: fixed;
      font-size: 1.5em;
      cursor: pointer;
      bottom: 40px;
      right: 40px;
    }
    .add:hover{
      background: white;
      color: black;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
  @media (max-width: 888px) {

      .dashboard{
        padding-left: 20px;
        padding-right: 20px;
      }
      .type-wrapper{
        width:100%;
        left: 0;
      }
      .search-content{
        margin-left: 0px;
    }
    nav{
      width: 100%;
    }

    nav .search{
        flex: 5;
        width: 0px;
    }
    }
</style>