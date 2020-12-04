<template>
  <div>
    <Nav />
    <div class="main">
      <div class="py-container">
        <!--已选择的分类-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchText.keyword">
              {{ searchText.keyword }}<i @click="delKeyword">×</i>
            </li>
            <li class="with-x" v-if="searchText.categoryName">
              {{ searchText.categoryName }}<i @click="delCategoryName">×</i>
            </li>
            <li class="with-x" v-if="searchText.trademark">
              品牌：{{ searchText.trademark.split(":")[1]
              }}<i @click="delTrademark">×</i>
            </li>
            <li
              class="with-x"
              v-for="(attr, index) in searchText.props"
              :key="attr.attrId"
            >
              {{ attr.split(":")[2] }}:{{ attr.split(":")[1] }}
              <i @click="delAttr(index)">×</i>
            </li>
          </ul>
        </div>

        <!--可选择的分类-->
        <SearchSelector
          :addTrademarkChecked="addTrademarkChecked"
          :addAttrsChecked="addAttrsChecked"
        />

        <div class="details clearfix">
          <!--搜索结果导航栏-->
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: searchText.order.indexOf('1') > -1 }"
                  @click="allChecked"
                >
                  <a
                    >综合
                    <i
                      class="iconfont icon-jiantoushangsheng"
                      v-show="!isAllAgain"
                    ></i>
                    <i
                      class="iconfont icon-jiantouxiajiang"
                      v-show="isAllAgain"
                    ></i>
                  </a>
                </li>
                <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                  <i></i>
                </li>
                <li
                  :class="{ active: searchText.order.indexOf('2') > -1 }"
                  @click="priceChecked()"
                >
                  <a
                    >价格
                    <i
                      class="iconfont icon-jiantoushangsheng"
                      v-show="!isPriceAgain"
                    ></i>
                    <i
                      class="iconfont icon-jiantouxiajiang"
                      v-show="isPriceAgain"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 搜索结果展示 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <!-- 商品图片 -->
                  <div class="p-img">
                    <router-link to="/detail" target="_blank"
                      ><img :src="goods.defaultImg"
                    /></router-link>
                  </div>
                  <!-- 商品价格 -->
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <!-- 商品属性 -->
                  <div class="attr">
                    <router-link
                      target="_blank"
                      to="/detail"
                      >{{ goods.title }}</router-link
                    >
                  </div>
                  <!-- 商品评论 -->
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <!-- 商品操作 -->
                  <div class="operate">
                    <a
                      href=""
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 自定义分页器 -->
          <Pagination
            :total="total"
            :pageNo="searchText.pageNo"
            :pageSize="searchText.pageSize"
            @handleSizeChange="handleSizeChange"
          />
          <!-- element分页器 -->
          <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchText.pageNo"
            :pager-count="7"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            background
            layout=" prev, pager, next,total, sizes, jumper"
            :total="total"
          >
          </el-pagination> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchSelector from "./SearchSelector";
import Nav from "@components/Nav";
import Pagination from "@components/Pagination";
export default {
  name: "Search",
  data() {
    return {
      searchText: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 5,
        props: [],
        trademark: "",
      },
      isPriceAgain: false,
      isAllAgain: false,
      pages: [],
    };
  },
  computed: {
    ...mapGetters(["goodsList", "total"]),
  },
  components: {
    SearchSelector,
    Pagination,
    Nav,
  },
  watch: {
    $route() {
      this.updateSearch();
    },
  },
  methods: {
    ...mapActions(["getSearch"]),
    updateSearch(pageNo) {
      const {
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      } = this.$route.query;
      const { searchText } = this.$route.params;
      this.searchText = {
        ...this.searchText,
        categoryName,
        category1Id,
        category2Id,
        category3Id,
        keyword: searchText,
        pageNo,
      };
      this.getSearch(this.searchText);
    },
    //删除搜索关键字
    delKeyword() {
      this.searchText.keyword = "";
      this.$bus.$emit("clearKeyword");
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
    },
    //删除分类选择
    delCategoryName() {
      (this.searchText.delCategoryName = ""),
        this.$router.replace({
          name: "search",
          params: this.$route.params,
        });
    },
    //删除品牌选择
    delTrademark() {
      this.searchText.trademark = "";
      this.updateSearch();
    },
    //删除属性选择
    delAttr(index) {
      this.searchText.props.splice(index, 1);
      this.updateSearch();
    },
    //添加品牌选择
    addTrademarkChecked(trademark) {
      this.searchText.trademark = trademark;
      this.updateSearch();
    },
    //添加属性选择
    addAttrsChecked(attr) {
      this.searchText.props = attr;
      this.updateSearch();
    },
    //综合排序
    allChecked() {
      let [orderNum, orderType] = this.searchText.order.split(":");
      if (orderNum === "1") {
        this.isAllAgain = !this.isAllAgain;
        orderType = this.isAllAgain ? "desc" : "asc";
      } else {
        orderNum = 1;
      }
      this.searchText.order = `${orderNum}:${orderType}`;
      this.updateSearch();
    },
    //价格排序
    priceChecked() {
      let [orderNum, orderType] = this.searchText.order.split(":");
      //判断是不是第二次点击
      if (orderNum === "2") {
        this.isPriceAgain = !this.isPriceAgain;
        orderType = this.isPriceAgain ? "desc" : "asc";
      } else {
        orderType = "asc";
        this.isPriceAgain = false;
        orderNum = 2;
      }
      this.searchText.order = `${orderNum}:${orderType}`;
      this.updateSearch();
    },
    //分页器函数
    handleSizeChange(pageNo) {
      this.updateSearch(pageNo);
    },
    /*
    handleCurrentChange(currentPage) {
      this.updateSearch(currentPage);
    }, */
  },
  mounted() {
    this.updateSearch();
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>