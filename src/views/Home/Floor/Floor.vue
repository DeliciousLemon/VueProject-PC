<template>
  <div>
    <div
      class="floor"
      v-for="(floorCont, index) in floorConts"
      :Key="index"
    >
      <!-- 顶部分类 -->
      <div class="title">
        <h3 class="nav-title">{{floorCont.name}}</h3>
        <ul class="nav-tabs">
          <li class="active" v-for="(keyword,index) in floorCont.keywords" :key="index">
            <a href="#tab1" data-toggle="tab">{{ keyword }}</a>
          </li>
        </ul>
      </div>
      <!-- 推荐内容 -->
      <div class="tab-content">
        <!-- 左边推荐 -->
        <div class="blockgary">
          <ul class="jd-list">
            <li v-for="(nav,index) in floorCont.navList" :key="index">{{nav.text}}</li>
          </ul>
          <img src="./images/floor-1-1.png" />
        </div>
        
        <!-- 轮播图 -->
        <Banner class="banner" :bannerList="floorBanners" />
        <!-- 右边推荐 -->
        <div class="split">
          <div class="floor-conver-pit">
            <img src="./images/floor-1-2.png" />
          </div>
          <div class="floor-conver-pit">
            <img src="./images/floor-1-3.png" />
          </div>
        </div>
        <div class="split-center">
          <img src="./images/floor-1-4.png" />
        </div>
        <div class="split">
          <div class="floor-conver-pit">
            <img src="./images/floor-1-5.png" />
          </div>
          <div class="floor-conver-pit">
            <img src="./images/floor-1-6.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Banner from "@components/Banner";
export default {
  name: "Floor",
  components: {
    Banner,
  },
  computed: {
    ...mapState({
      floorBanners: (state) => state.home.floorBanners,
      floorConts: (state) => state.home.floorConts,
    }),
  },
  methods: {
    ...mapActions(["getFloorBanners", "getFloorCont"]),
  },
  mounted() {
    this.getFloorBanners();
    this.getFloorCont();
  },
};
</script>

<style  lang="less" scoped>
.floor {
  width: 1200px;
  margin: 0 auto;
}
.title {
  min-width: 1200px;
  height: 50px;
  border-bottom: 2px solid red;
  display: flex;
  justify-content: space-between;
}
.nav-title {
  margin-left: 10px;
  color: red;
  line-height: 50px;
}
.nav-tabs {
  display: flex;
  align-items: center;
}
.nav-tabs li {
  padding: 0 10px;
  height: 16px;
  float: left;
  font-size: 14px;
}
.nav-tabs li:nth-child(n + 2) {
  border-left: 1px solid #666;
}
.nav-tabs li a {
  text-decoration: none;
  color: #666;
}
.nav-tabs .active a {
  color: red;
}
.tab-content {
  width: 1200px;
  height: 360px;
}
.blockgary {
  float: left;
  width: 210px;
}
.jd-list {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.jd-list li {
  border-bottom: 1px solid #666;
  width: 80px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  margin: 5px 10px;
  padding-bottom: 5px;
}
.blockgary img{
  width: 200px;
  height: 240px;
}
.swiper-container {
  float: left;
  width: 330px;
}
.split {
  float: left;
  height: 360px;
}
.split img {
  height: 177px;
  border-bottom: 1px solid #333;
}
/deep/ .banner img{
  width: 330px;
  height: 360px;
}
.split-center {
  float: left;
  height: 359px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
}
</style>
