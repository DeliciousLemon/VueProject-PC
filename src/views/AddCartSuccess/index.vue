<template>
  <div class="paysuccess">
    <div class="success">
      <h3>恭喜您，添加购物车成功啦！</h3>
      <div class="goods">
        <img :src="img" width="48" height="48" />
        <span>{{name}}</span>
        <span v-for="(value,index) in attr" :key="index">{{value}}</span>
        <span>{{count}}个</span>
      </div>
      <div class="paydetail">
        <p class="button">
          <router-link class="btn-look" to="/mycart">查看购物车</router-link>
          <router-link class="btn-goshop" to="/">继续购物</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddCartSuccess",
  computed: {
    ...mapGetters(["name", "attr", "count", "img"]),
  },
};
</script>

<style lang="less" scoped>
.paysuccess {
  margin: 20px auto;
  padding: 25px;
  border: 1px solid rgb(211, 211, 211);
  width: 1200px;
  width: 1148px;

  .success {
    width: 500px;
    margin: 0 auto;

    h3 {
      margin: 20px 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;

      img {
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        margin-right: 14px;
      }
    }
    .goods{
      display:flex;
      justify-content:space-around;
    }
    .paydetail {
      margin-left: 66px;
      font-size: 15px;

      .button {
        margin: 30px 0;
        line-height: 26px;

        a {
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          border-radius: 2px;
          user-select: none;
          font-size: 18px;
          padding: 4px 20px;
          line-height: 22px;
          text-decoration: none;

          &.btn-look {
            margin-right: 13px;
            color: #fff;
            background-color: #e1251b;
            border: 1px solid #e1251b;
          }

          &.btn-goshop {
            color: #666;
            background-color: #eee;
            border: 1px solid #e1e1e1;
          }
        }
      }
    }
  }
}
</style>