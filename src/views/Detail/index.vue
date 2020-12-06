<template>
  <div>
    <Nav />
    <div class="box">
      <!-- 路径 -->
      <div class="address">
        <span>{{ categoryView.category1Name }}</span>
        <span>{{ categoryView.category2Name }}</span>
        <span>{{ categoryView.category3Name }}</span>
      </div>
      <!-- 上部分 -->
      <div class="top">
        <!-- 图片展示 -->
        <div class="top-left">
          <!-- 放大镜 -->
          <Magnifier :skuImageList="skuInfo.skuImageList" />
          <!-- 轮播图 -->
          <SmallPhotoList />
        </div>
        <!-- 商品属性选择 -->
        <div class="top-right">
          <div class="title">{{ skuInfo.skuName }}</div>
          <div class="discription">{{ skuInfo.skuDesc }}</div>
          <div class="priceBox">
            <div>
              价 格
              <span>￥</span>
              <span class="price">{{ skuInfo.price }}</span>
              <a href="###">降价提醒</a>
            </div>
            <div class="preferential">
              <span>促 销 </span>
              <span class="addPrice">加价购</span>
              <div>
                满999.00元另加20.00元，或满1999.00元另加30.00元，或满2999.00元另加40.00元，即可在购物车换购热销商品
              </div>
            </div>
          </div>
          <div class="support">
            <span>支 持</span>
            <span>以旧换新，闲置手机回收4G套餐超值抢，礼品购</span>
          </div>
          <div class="port">
            <span>配 送 至</span>
            <span>广东省 深圳市 宝安区</span>
          </div>
          <div
            class="attrCheck"
            v-for="spuSaleAttr in spuSaleAttrList"
            :key="spuSaleAttr.id"
          >
            <span>{{ spuSaleAttr.saleAttrName }}</span>
            <ul>
              <li
                v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList"
                :key="spuSaleAttrValue.id"
                :class="{
                  attrActive:
                    checkedAttr[spuSaleAttr.saleAttrName] ===
                    spuSaleAttrValue.saleAttrValueName,
                }"
                @click="
                  attrChecked(
                    spuSaleAttr.saleAttrName,
                    spuSaleAttrValue.saleAttrValueName
                  )
                "
              >
                {{ spuSaleAttrValue.saleAttrValueName }}
              </li>
            </ul>
          </div>
          <div class="buyCount">
            <div class="count">
              <input type="text" :value="count" disabled />
              <div>
                <button @click="addCount">+</button>
                <button @click="subCount">-</button>
              </div>
            </div>
            <button class="addCar" @click="addCart">加入购物车</button>
          </div>
        </div>
      </div>
      <!-- 下部分 -->
      <div class="bottom">
        <div>
          <!-- 相关和推荐 -->
          <div></div>
          <!-- 商品详细信息 -->
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import Nav from "@components/Nav";
import Magnifier from "./Magnifier";
import SmallPhotoList from "./SmallPhotoList";
export default {
  name: "Detail",
  data() {
    return {
      checkedAttr: {},
      count: 1,
    };
  },
  components: {
    Nav,
    Magnifier,
    SmallPhotoList,
  },
  computed: {
    ...mapGetters(["categoryView", "spuSaleAttrList", "skuInfo"]),
  },
  methods: {
    ...mapActions(["getDetail", "getAddCart"]),
    ...mapMutations(["ADD_MY_GOODS"]),
    //选中属性变色，保存选择数据
    attrChecked(key, value) {
      this.checkedAttr[key] = value;
      //强制渲染页面
      this.$forceUpdate();
      this.ADD_MY_GOODS(this.checkedAttr);
    },
    //数量增加
    addCount() {
      this.count++;
    },
    //数量减少
    subCount() {
      if (this.count <= 1) return;
      this.count--;
    },
    //添加购物车
    addCart() {
      if (Object.keys(this.checkedAttr).length < 3) {
        alert("请选择属性");
        return;
      }
      const skuID = this.$route.params.id;
      const skuNum = String(this.count);
      this.getAddCart({skuID, skuNum});
      this.$router.push("/addcartsuccess");
    },
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 1200px;
  margin: 0 auto;
}
.address {
  height: 50px;
  line-height: 50px;
  font-size: 12px;
}
.address span:nth-child(n + 2):before {
  margin: 10px;
  content: "/";
}
.top {
  display: flex;
  justify-content: space-between;
}
.top-left {
  width: 400px;
  height: 450px;
  border: 1px solid red;
}
.top-right {
  width: 700px;
  height: 500px;
  padding: 20px;
  font-size: 14px;
}
.title {
  font-weight: bold;
  margin-bottom: 10px;
}
.discription {
  font-size: 12px;
  color: red;
  margin: 10px 0;
}
.priceBox {
  height: 100px;
  background-color: rgb(254, 233, 235);
  padding: 10px;
}
.priceBox div:first-child {
  padding: 20px 0;
}
.price {
  font-weight: bold;
  color: red;
  font-size: 25px;
}
.priceBox a {
  text-decoration: none;
  color: red;
}
.preferential {
  display: flex;
  justify-content: space-between;
  margin: -10px 0;
}
.addPrice {
  height: 20px;
  background-color: red;
  color: white;
}
.addPrice + div {
  width: 580px;
  padding: 0 5px;
}
.support {
  margin: 20px 0;
}
.support span:first-child {
  margin: 0 10px;
}
.port {
  margin: 20px 0;
}
.port span:first-child {
  margin: 0 10px;
}
.attrCheck {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.attrCheck span {
  margin: 0 10px;
}
.attrCheck li {
  float: left;
  height: 30px;
  border: 1px solid #777;
  text-align: center;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 5px;
  cursor: pointer;
}
.attrCheck .attrActive {
  border: 1px solid rgb(45, 109, 182);
  background-color: rgb(15, 182, 233);
}
.buyCount {
  display: flex;
}
.count {
  display: flex;
  border: 1px solid rgba(119, 119, 119, 0.315);
  margin: 20px 10px;
}
.count input {
  width: 20px;
  height: 30px;
  text-align: center;
  border: none;
}
.count div button {
  width: 15px;
  height: 17px;
  line-height: 15px;
  display: block;
  border: none;
  outline: none;
}
.addCar {
  height: 34px;
  width: 100px;
  margin: 20px 0;
  border: none;
  color: white;
  background-color: red;
  outline: none;
}
</style>
