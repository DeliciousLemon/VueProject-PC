<template>
  <div class="floor">
    <!-- 顶部分类 -->
    <div class="title">
      <h3 class="nav-title">家用电器</h3>
      <ul class="nav-tabs">
        <li class="active">
          <a href="#tab1" data-toggle="tab">热门</a>
        </li>
        <li>
          <a href="#tab2" data-toggle="tab">大家电</a>
        </li>
        <li>
          <a href="#tab3" data-toggle="tab">生活电器</a>
        </li>
        <li>
          <a href="#tab4" data-toggle="tab">厨房电器</a>
        </li>
        <li>
          <a href="#tab5" data-toggle="tab">应季电器</a>
        </li>
        <li>
          <a href="#tab6" data-toggle="tab">空气/净水</a>
        </li>
        <li>
          <a href="#tab7" data-toggle="tab">高端电器</a>
        </li>
      </ul>
    </div>
    <!-- 推荐内容 -->
    <div class="tab-content">
      <!-- 左边推荐 -->
      <div class="blockgary">
        <ul class="jd-list">
          <li>节能补贴</li>
          <li>4K电视</li>
          <li>空气净化器</li>
          <li>IH电饭煲</li>
          <li>滚筒洗衣机</li>
          <li>电热水器</li>
        </ul>
        <img src="./images/floor-1-1.png" />
      </div>
      <!-- 轮播图 -->
      <Banner :bannerList="floorBanners" />
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
    }),
  },
  methods: {
    ...mapActions(["getFloorBanners"]),
  },
  mounted() {
    this.getFloorBanners();
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
.split-center {
  float: left;
  height: 359px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
}
</style>
