<template>
  <div>
    <!-- 上部分 -->
    <div class="top">
      <div class="top-content">
        <div>全部商品分类</div>
        <ul>
          <li>服装城</li>
          <li>美妆馆</li>
          <li>尚品汇超市</li>
          <li>全球购</li>
          <li>闪购</li>
          <li>团购</li>
          <li>有趣</li>
          <li>秒杀</li>
        </ul>
      </div>
    </div>
    <!-- 下部分 -->
    <div class="bottom">
      <!-- 左边分类 -->
      <div class="bottom-left">
        <!-- 一级 -->
        <ul v-for="category in categorys" :key="category.categoryId">
          <div class="bottom-left-item">
            <a href="###">{{ category.categoryName }}</a>
            <!-- 二级 -->
            <div class="bottom-left-child">
              <li
                v-for="child in category.categoryChild"
                :key="child.categoryId"
              >
                <a href="###">{{ child.categoryName }}</a>
                <!-- 三级 -->
                <div class="bottom-left-grandson">
                  <span
                    v-for="grandson in child.categoryChild"
                    :key="grandson.categoryId"
                  >
                    <a href="###">{{ grandson.categoryName }}</a>
                  </span>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
      <!-- 中间轮播图 -->
      <div class="bottom-center">
        <div class="block">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small"></h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 右边信息栏 -->
      <div class="bottom-right"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeNav",
  computed: {
    ...mapState({
      categorys: (state) => state.home.categorys,
    }),
  },
  methods: {
    ...mapActions(["getCategorys"]),
  },
  mounted() {
    this.getCategorys();
  },
};
</script>

<style lang="less" scoped>
.top {
  height: 45px;
  border-bottom: 2px solid red;
}
.top-content {
  width: 1200px;
  height: 47px;
  margin: 0 auto;
}
.top-content div {
  width: 210px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: red;
  color: white;
  float: left;
}
.top-content ul {
  display: flex;
  justify-content: space-around;
  height: 45px;
  line-height: 45px;
  width: 700px;
}
.bottom {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.bottom-left {
  width: 190px;
  line-height: 30px;
  font-size: 14px;
  background-color: rgb(250, 250, 250);
  padding-left: 20px;
}
.bottom-left a:hover {
  text-decoration: underline;
}
.bottom-left-item > a {
  text-decoration: none;
  color: #333;
}
.bottom-left-item:hover .bottom-left-child {
  display: block;
}
.bottom-left-child {
  display: none;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(247, 247, 247);
  position: absolute;
  top: 0;
  left: 210px;
  width: 736px;
  height: 510px;
  line-height: 20px;
}
.bottom-left-child li {
  display: flex;
  align-items: flex-start;
  margin-top: 6px;
}
.bottom-left-child li > a {
  display: inline-block;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: #333;
  margin-top: 10px;
}
.bottom-left-grandson {
  display: inline-block;
  width: 600px;
}
.bottom-left-grandson span {
  display: inline-block;
  padding: 0 10px;
  border-left: 1px solid rgb(204, 204, 204);
  height: 20px;
  margin-top: 10px;
}
.bottom-left-grandson span > a {
  text-decoration: none;
  color: rgb(102, 102, 102);
  font-size: 12px;
}
</style>
