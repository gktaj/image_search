<template>
<div class="container">
<div class="portfolioContainer row" v-if="collections">
<Singlepost v-for="(item,index) in collections" :item="item" :index="index" :key="item.id"/>
</div>
<paginate
  :page-count="20"
  :click-handler="paginationCurrent"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'pagination'"
  :page-class="'page-item'"
  :page-link-class="'page-link'"
  :prev-class="'page-item'"
  :prev-link-class="'page-link'"
  :next-class="'page-item'"
  :next-link-class="'page-link'"
  >
</paginate>
</div>
</template>

<script>
import Singlepost from './Singlepost.vue';
import { mapActions,mapGetters,mapState } from "vuex";
export default {
  name: 'Postlist',
  components:{
    Singlepost
  },
  data(){
    return {
      //allCollections:[]
    }
  }
  ,
  computed:{
    ...mapState(['searchInputdata']),
    ...mapGetters(["collections"]),
    filteredData(){
        return this.collections.filter(el=>{
          return el.data[0].title.toLowerCase().indexOf(this.searchInputdata.toLowerCase()) !==-1;
        })
    } 
    
  },
  created(){
    this.loadImages();
  },
  methods:{
    ...mapActions(["loadImages"]),
    paginationCurrent(pageNum) {
      this.loadImages(pageNum)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

/* ===========
   Gallery
 =============*/
.portfolioFilter a {
  -moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  -moz-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease-out;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  color: #333333;
  padding: 5px 10px;
  display: inline-block;
  transition: all 0.3s ease-out;
}
.portfolioFilter a:hover {
  background-color: #228bdf;
  color: #ffffff;
}
.portfolioFilter a.current {
  background-color: #228bdf;
  color: #ffffff;
}
.thumb {
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%;
}
.thumb-img {
  border-radius: 2px;
  overflow: hidden;
  width: 100%;
}
.gal-detail h4 {
  margin: 16px auto 10px auto;
  width: 80%;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.gal-detail .ga-border {
  height: 3px;
  width: 40px;
  background-color: #228bdf;
  margin: 10px auto;
}
                                    
</style>
