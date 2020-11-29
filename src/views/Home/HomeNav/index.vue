<template>
  <div>
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
    <div class="bottom">
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
      <div class="bottom-center"></div>
      <div class="bottom-right"></div>
    </div>
  </div>
</template>

<script>
import { reqHome } from "@api/home";
export default {
  name: "HomeNav",
  data() {
    return {
      categorys: [],
    };
  },
  mounted() {
    reqHome()
      .then((val) => {
        console.log(val);
        this.categorys = val;
      })
      .catch((err) => {
        console.log(err);
      });
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
.bottom .bottom-left-item > a {
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
  line-height: 40px;
}
.bottom-left-child li {
  display: flex;
  align-items: flex-start;
}
.bottom-left-child li > a {
  display: inline-block;
  width: 100px;
  text-align: center;
  text-decoration: none;
  color: #333;
}
.bottom-left-grandson {
  display: inline-block;
  width: 600px;
}
.bottom-left-grandson span {
  display: inline-block;
  padding: 0 10px;
  height: 20px;
  line-height: 20px;
  border-left: 1px solid rgb(204, 204, 204);
}
.bottom-left-grandson span > a {
  text-decoration: none;
  color: rgb(102, 102, 102);
  font-size: 12px;
}
</style>
