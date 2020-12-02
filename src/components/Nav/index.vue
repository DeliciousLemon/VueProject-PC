<template>
  <!-- 上部分 -->
  <div class="top">
    <div class="top-content">
      <div @mouseenter="isSearchShow = true" @mouseleave="isSearchShow = false">
        <span>全部商品分类</span>
        <!-- 下部分 -->
        <transition name="search">
          <div class="bottom" v-show="isHomeShow || isSearchShow">
            <!-- 分类 -->
            <div class="bottom-left" @click="goSearch">
              <!-- 一级 -->
              <ul v-for="category in categorys" :key="category.categoryId">
                <div class="bottom-left-item">
                  <a
                    :data-categoryName="category.categoryName"
                    :data-categoryType="1"
                    :data-categoryId="category.categoryId"
                    >{{ category.categoryName }}</a
                  >
                  <!-- 二级 -->
                  <div class="bottom-left-child">
                    <li
                      v-for="child in category.categoryChild"
                      :key="child.categoryId"
                    >
                      <a
                        :data-categoryName="child.categoryName"
                        :data-categoryType="2"
                        :data-categoryId="child.categoryId"
                        >{{ child.categoryName }}</a
                      >
                      <!-- 三级 -->
                      <div class="bottom-left-grandson">
                        <span
                          v-for="grandson in child.categoryChild"
                          :key="grandson.categoryId"
                        >
                          <a
                            :data-categoryName="grandson.categoryName"
                            :data-categoryType="3"
                            :data-categoryId="grandson.categoryId"
                            >{{ grandson.categoryName }}</a
                          >
                        </span>
                      </div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <ul class="nav-ul">
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
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HomeNav",
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
  computed: {
    ...mapState({
      categorys: (state) => state.home.categorys,
    }),
  },
  methods: {
    ...mapActions(["getCategorys"]),
    goSearch(e) {
      if (!e.target.dataset.categoryname) return;
      this.$router.push({
        name: "search",
        query: {
          categoryName: e.target.dataset.categoryname,
          [`category${e.target.dataset.categorytype}Id`]: e.target.dataset
            .categoryid,
        },
      });
    },
  },
  mounted() {
    this.getCategorys();
  },
};
</script>

<style lang="less" scoped>
.top {
  height: 45px;
  min-width: 1200px;
  border-bottom: 2px solid red;
}
.top-content {
  width: 1200px;
  height: 47px;
  margin: 0 auto;
}
.top-content > div {
  width: 210px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: red;
  color: white;
  float: left;
}
.nav-ul {
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
  width: 180px;
  line-height: 30px;
  font-size: 14px;
  background-color: rgb(250, 250, 250);
  padding-left: 30px;
  text-align: left;
  z-index: 3;
}
.bottom-left a:hover {
  text-decoration: underline;
  cursor: pointer;
}
.bottom-left-item > a {
  text-decoration: none;
  color: #333;
}
.bottom-left-item:hover .bottom-left-child {
  display: block;
  z-index: 3;
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
//过渡效果
.search-enter {
  height: 0px;
}
.search-enter-active {
  height: 510px;
  transition: height 5s;
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
