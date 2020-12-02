<template>
  <div class="box">
    <div class="top">
      <dl>
        <dt>购物指南</dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt>配送方式</dt>
        <dd>上门自提</dd>
        <dd>211限时达</dd>
        <dd>配送服务查询</dd>
        <dd>配送费收取标准</dd>
        <dd>海外配送</dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd>货到付款</dd>
        <dd>在线支付</dd>
        <dd>分期付款</dd>
        <dd>邮局汇款</dd>
        <dd>公司转账</dd>
      </dl>
      <dl>
        <dt>售后服务</dt>
        <dd>售后政策</dd>
        <dd>价格保护</dd>
        <dd>退款说明</dd>
        <dd>返修/退换货</dd>
        <dd>取消订单</dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd>夺宝岛</dd>
        <dd>DIY装机</dd>
        <dd>延保服务</dd>
        <dd>尚品汇E卡</dd>
        <dd>尚品汇通信</dd>
      </dl>
      <div>
        <div class="helpTitle">帮助中心</div>
        <img src="./images/wx_cz.jpg" alt="" />
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>关于我们</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
      </ul>
      <div>地址：北京市昌平区宏福科技园综合楼6层</div>
      <div>京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.box{
  background-color: rgb(234, 234, 234);
  padding: 30px 0;
}
.top{
  width: 1000px;
  margin: 0 auto;
  display:flex;
  justify-content:space-around;
  border-bottom:1px solid rgba(119, 119, 119, 0.13);
  height: 200px;
}
.top dt{
  font-weight: bold;
  font-size: 14px;
}
.top dd{
  font-size: 12px;
  line-height: 18px;
}
.helpTitle{
  font-weight: bold;
}
.bottom{
  width: 800px;
  margin: 20px auto;
  font-size: 12px;
  text-align:center;
}
.bottom ul{
  display:flex;
  justify-content:space-around;
}
.bottom li{
  width: 80px;
  padding:0 10px;
}
.bottom li:nth-child(n+2){
  border-left:1px solid rgba(0, 0, 0, 0.315);
}
.bottom div{
  margin: 10px 0;
}
</style>
