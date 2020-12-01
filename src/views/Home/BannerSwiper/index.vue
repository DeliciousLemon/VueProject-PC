<template>
  <div class="box">
    <Banner :bannerList="banners" />
    <!-- 右侧信息 -->
    <div class="right">
      <div>
        <!-- 公告 -->
        <div class="news">
          <div class="news-title">
            <span>尚品汇快报</span>
            <a href="###">更多></a>
          </div>
          <ul class="news-content">
            <li>
              <span>[特惠]</span>
              <a href="">备战开学季 全民半价购数码</a>
            </li>
            <li>
              <span>[特惠]</span>
              <a href="">备战开学季 全民半价购数码</a>
            </li>
            <li>
              <span>[特惠]</span>
              <a href="">备战开学季 全民半价购数码</a>
            </li>
            <li>
              <span>[特惠]</span>
              <a href="">备战开学季 全民半价购数码</a>
            </li>
            <li>
              <span>[特惠]</span>
              <a href="">备战开学季 全民半价购数码</a>
            </li>
          </ul>
        </div>
        <!-- 精灵图 -->
        <ul class="quick">
          <li>
            <a href="">
              <span></span>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>机票</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>电影票</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>游戏</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>彩票</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>加油站</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>酒店</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>火车票</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>众筹</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>理财</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>礼品卡</span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
              <span>白条</span>
            </a>
          </li>
        </ul>
      </div>
      <img src="./images/ad1.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Banner from "@components/Banner";
export default {
  name: "BannerSwiper",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  components: {
    Banner,
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  async mounted() {
    await this.getBanners();
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.swiper-container {
  margin-top: 6px;
  margin-left: 220px;
  font-size: 0;
  height: 500px;
}
.photoBox {
  width: 730px;
  height: 510px;
}
.right {
  height: 510px;
  width: 244px;
  margin-left: 5px;
}
.news {
  margin-top: 6px;
  padding: 0 7px;
  border: 1px solid #666;
}
.news-title {
  height: 40px;
  padding: 0 8px;
  border-bottom: 1px solid #666;
  margin: 0 auto;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}
.news-title > span {
  font-weight: bold;
  font-size: 14px;
}
.news-title > a {
  font-size: 12px;
  text-decoration: none;
  color: black;
}
.news-content {
  font-size: 12px;
  line-height: 25px;
  margin: 10px 0;
  padding: 0 8px;
}
.news-content span {
  font-weight: bold;
}
.news-content a {
  text-decoration: none;
  color: black;
}
.quick {
  height: 236px;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  width: 243px;
  border-right: 1px solid #666;
}
.quick li {
  width: 59px;
  flex-grow: 1;
  height: 78px;
  border-left: 1px solid #666;
  border-bottom: 1px solid #666;
  text-align: center;
  font-size: 12px;
}
.quick li span:nth-child(1) {
  display: block;
  margin: 10px auto;
  width: 30px;
  height: 30px;
  border: 1px solid red;
}

.right img {
  width: 244px;
}
.block .el-carousel__container .el-carousel__arrow {
  background-color: rgb(243, 9, 9);
  color: rgb(243, 9, 9);
  border-radius: 0;
}
</style>
