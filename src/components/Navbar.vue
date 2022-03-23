<template>
<div>
  
  <aside class="side-bar">
      <div class="logo">
          <img src="../assets/car-logo.png" alt="">
      </div>

      <ul>
          <router-link to="/">
          <li><i class="material-icons dash">
            dashboard
            </i>
            <span  class="tool-tip">Dashboard</span>
        </li>
        </router-link>
        <router-link to="/graphics">
          <li>
            <i class="material-icons dash">
            analytics
            </i>
            <span class="tool-tip">Analytics</span>
          </li>
          </router-link>
          <li>
              <i class="material-icons dash">
                portrait
                </i>
                <span class="tool-tip">Settings</span>
          </li>
      </ul>
  </aside>
</div>
</template>

<script>
export default {

}
</script>

<style>
    aside{
        z-index: 1;
        height: 100vh;
        position: fixed;
        width: 80px;
        transition: 0.3s;
        left: 0;
        background: #333333;
    }
    aside .logo{
        display: flex;
        padding: 19.8px 0;
        justify-content: center;
    }
    .logo img{
        width: 60px;
        height: auto;
    }
    .side-bar ul{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        gap: 16px;
    }
    .side-bar ul li{
        list-style: none;
        padding: 19.5px 19.5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        transition: 0.3s;
        align-items: center;
        position: relative;
    }
    .side-bar ul li:hover{
        background-color: rgb(97, 97, 97);
    }
    .side-bar ul li .dash{
        color: white;
        font-size: 35px;
    }
     .side-bar ul li .tool-tip{
     position: absolute;
     color: black;
     height: 35px;
     top: -20px;
     width: 122px;
     left: 90px;
     background: white;
     line-height: 35px;
     text-align: center;
     opacity: 0;
     border-radius: 6px;
     transition: 0.2s;
     transform: translateY(50%);
     pointer-events: none;
     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
 }
  .side-bar ul li:hover .tool-tip{
      opacity: 1;
      top: 0;
  }
  .side-bar a{
      color: black;
  }
    @media (max-width: 888px) {
        aside{
            left: -100px;
        }
        .search-content{
        margin-left: 0px;
    }
    }
</style>