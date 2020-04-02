<template>
  
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Image Search</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <div class="inputWarp" v-show="$route.name=='Home'">
          <input type="text" placeholder="Search..." v-model="serachInput">
          <div class="search"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name:'Navbar',
    computed:{
      ...mapState(["searchInputdata"]),
      serachInput:{
         get(){
          return this.searchInputdata
         },
         set(val){
          this.SEARCHINPUT(val)
         }
      }
    },
    methods:{
      ...mapMutations(['SEARCHINPUT'])
    }

}
</script>

<style scoped lang="scss">
.navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    outline: 0;
    color: rgba(255,255,255,.5);
    border: 2px solid rgba(255,255,255,.5);
    margin-left: 8px;
}
.nav-link.router-link-exact-active.router-link-active {
    border: 2px solid #40B3A2;
    color: #40B3A2;
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
    border: 2px solid #40B3A2;
    color: #40B3A2;
}
.inputWarp {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background: #40B3A2;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 10px;
      right: 0;
      bottom: 0;
      left: 10px;
      width: 12px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all .5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all .5s;
    }
  }
  input {
    font-family: 'Inconsolata', monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: #40B3A2;
    color: white;
    text-shadow: 0 0 10px #40B3A2;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 #40B3A2,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -250px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}
</style>