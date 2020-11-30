<template>
  <div class="box">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel class="photoBox" trigger="click" height="510px">
        <el-carousel-item v-for="item in banners" :key="item.id">
          <img :src="item.imgUrl" alt="" class="small" />
        </el-carousel-item>
      </el-carousel>
    </div>
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
              <img src="" alt="" />
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>机票</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>电影票</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>游戏</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>彩票</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>加油站</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>酒店</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>火车票</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>众筹</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>理财</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
              <span>礼品卡</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
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
export default {
  name: "Banner",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  mounted() {
    this.getBanners();
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
.block {
  margin-left: 210px;
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
  height: 245px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 244px;
  border: 1px solid red;
}
.quick li {
  width: 59px;
  height: 50px;
  border-left: 1px solid blue;
  border-bottom: 1px solid blue;
}
</style>
