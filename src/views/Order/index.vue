<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="user in userAddressList"
        :key="user.id"
      >
        <span
          :class="{ username: true, selected: isAddress === user.id }"
          @click="
            addressChecked(
              user.consignee,
              user.userAddress,
              user.phoneNum,
              user.id
            )
          "
          >{{ user.consignee }}</span
        >
        <p>
          <span class="s1">{{ user.userAddress }}</span>
          <span class="s2">{{ user.phoneNum }}</span>
          <span class="s3" v-if="+user.isDefault">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="detail in detailList"
          :key="detail.skuId"
        >
          <li>
            <img width="100px" :src="detail.imgUrl" alt="商品图片" />
          </li>
          <li>
            <p>
              {{ detail.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ detail.orderPrice }}</h3>
          </li>
          <li>X{{ detail.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ detailList.length }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ totalPrice }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:<span>¥{{ totalPrice }}</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ user.address }}</span>
        收货人：<span>{{ user.name }} </span>
        <span>{{ user.phone }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay">提交订单</router-link>
    </div>
  </div>
</template>

<script>
import { reqUserData } from "@api/order";
export default {
  name: "Order",
  data() {
    return {
      //用户地址数据
      userAddressList: [],
      detailList: [],
      totalPrice: 0,
      user: {},
      isAddress: 0,
    };
  },
  methods: {
    addressChecked(name, address, phone, id) {
      this.user.name = name;
      this.user.address = address;
      this.user.phone = phone;
      this.isAddress = id;
    },
  },
  async mounted() {
    //获取用户地址
    const userData = await reqUserData();
    this.userAddressList = userData.data.userAddressList;
    this.detailList = userData.data.detailArrayList;
    this.totalPrice = userData.data.totalAmount;
    //设置默认地址
    const defaultAddress = this.userAddressList.find(
      (item) => item.isDefault === "1"
    );
    this.user.name = defaultAddress.consignee;
    this.user.phone = defaultAddress.phoneNum;
    this.user.address = defaultAddress.userAddress;
    this.isAddress = defaultAddress.id;
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .address {
      height: 50px;
      line-height: 50px;
      margin: 10px 0;
      display: flex;

      .username {
        width: 100px;
        text-align: center;
        border: 1px solid black;
      }

      .username::after {
        content: "";
        height: 13px;
        width: 13px;
      }

      .username.selected {
        border-color: #e1251b;
        background: url("./images/choosed.png") 88px 35px no-repeat;
      }

      .username.selected::after {
        display: block;
      }

      p {
        display: inline-block;

        .s1 {
          margin: 0 10px;
        }

        .s2 {
          margin-right: 10px;
        }

        .s3 {
          background-color: rgba(119, 119, 119, 0.568);
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 320px;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>