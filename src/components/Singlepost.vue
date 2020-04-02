<template>
      <div class="col-6 col-md-3 col-lg-3 wrapAll" v-if="item">
        <div class="gal-detail thumb" >
            <h4>{{item.data[0].title | shortTitle(40,"...")}}</h4>
            <div href="#" class="image-popup" :title="item.data[0].title" :style="{ backgroundImage:'url( \'' + item.links[0].href + '\')'}">
                <img :src="item.links[0].href" class="thumb-img" alt="work-thumbnail">
            </div>
            <div class="ga-border"></div>
            <p><small>{{item.data[0].description?item.data[0].description:"--" | readMore(100,"...")}}</small></p>
            <p class="small">NASA ID:-{{item.data[0].nasa_id}}</p>
            <router-link :to="{ name: 'Article', params: { id: index} }" class="btn btn-primary">View All info</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Singlepost",
    props:[
        "item","index"],
    filters:{
        readMore(text, length ,suffix ){
            if(text.length>100){
                return text.substring(0,length) + suffix
            } 
            else{
                 return text.substring(0,length)
            }
        },
        shortTitle(text, length ,suffix ){
            if(text.length>40){
                return text.substring(0,length) + suffix
            } 
            else{
                 return text.substring(0,length)
            }
        }
    },
    methods:{
        goToPage(){
            this.$router.push({ name: 'Article', params: { id: this.index } })
        }
    }

}
</script>

<style>
.col-6.col-md-3.col-lg-3.wrapAll {
    display: flex;
    align-items: stretch;
    color: #fff;
}
.image-popup {
    max-height: 142px;
    overflow: hidden;
    display: block;
    min-height: 142px;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}
.image-popup img {

    width: 100%;
    opacity: 0;

}
.gal-detail h4 {

    font-size: 17px;
    margin: 0px 0 15px;
    min-height: 57px;
    background: #40B3A2;
    color: #fff;
    display: flex;
    padding: 10px;
    align-items: center;

}
.gal-detail.thumb {

    background: #85CDCA;
    padding: 10px;
    margin-bottom: 10px;

}
</style>