<template>
  <div class="content">
    <div class="swiper-container border-1px" style="background: #FFFFFF">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card-wrap">
            <img src="../assets/girl.png" alt="" width="100%">
            <div class="card-background">
              <div class="detail-wrap">
                <img src="../assets/girl-name.png" alt="">
                <span id="name">asdasda</span>
                <img src="../assets/yunmi.png" id="ym" alt="">
              </div>
              <div class="detail-wrap">
                <img src="../assets/girl-phone.png" alt="">
                <span id="tel">1234444444</span>
              </div>
              <div class="detail-wrap">
                <img src="../assets/girl-birthday.png" alt="">
                <span id="birthday">2017-01-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="qqs-myvip-page">
      <div class="vip-tab-menu border-1px">
        <a class="tab-item border-1px" @click="myOrder">
          <div class="item-key"><i class="icon-item icon-order"></i>预约订单</div>
          <div class="item-tip-info"></div>
        </a>
        <a class="tab-item border-1px" @click="expenseRecord">
          <div class="item-key"><i class="icon-item icon-consume"></i>消费记录</div>
          <div class="item-tip-info"></div>
        </a>
        <a class="tab-item" @click="serveRecord">
          <div class="item-key"><i class="icon-item icon-service"></i>服务记录</div>
          <div class="item-tip-info"></div>
        </a>
      </div>
      <div class="vip-tab-menu border-1px">
        <a class="tab-item border-1px" @click="cardList">
          <div class="item-key"><i class="icon-item icon-intro"></i>会员卡说明</div>
          <div class="item-tip-info"></div>
        </a>
        <a class="tab-item" href="https://shequ.yunzhijia.com/thirdapp/forum/network/599d696de4b0ba656e966e9c">
          <div class="item-key"><i class="icon-item icon-group"></i>千千氏会员社区</div>
          <div class="item-tip-info"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  const _openId = 'opeN1wzFSSvEOUDFQjOZ0QBJw2QE'

  export default {
    data: function () {
      return {}
    },
    methods: {
      myOrder: function () {
        window.location.href = 'http://cs1.gzqqs.com/qqs/jsp/weixin/appointment/myOrder.html?openId=' + _openId
      },
      cardList: function () {
        this.$router.push({
          name: 'cardList'
        })
      },
      expenseRecord: function () {
        this.$router.push({
          name: 'expenseRecord'
        })
      },
      serveRecord: function () {
        this.$router.push({
          name: 'serveRecord'
        })
      }
    },
    created: function () {
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  @import "../common/sass/base.scss";

  .content {
    width: 100%;
    height: 100%;
    background: #f3f5f7;
  }

  .card-wrap {
    position: relative !important;
  @include px2rem(padding, 20, 30);
  }

  .card-background {
    position: absolute !important;
  @include px2rem(top, 90);
  @include px2rem(left, 160);
  }

  .detail-wrap {
    display: flex;
    align-items: center;
  }

  #ym {
  @include px2rem(width, 50);
  @include px2rem(height, 24);
  }

  .detail-wrap span {
  @include font-dpr(14);
    color: #333333 !important;
  @include px2rem(margin-right, 18);
  }

  .detail-wrap img {
  @include px2rem(width, 46);
  @include px2rem(height, 46);
  @include px2rem(margin-right, 16);
  }

  .info-wrap {
    position: absolute;
  @include px2rem(top, 68);
  @include px2rem(left, 130);
  @include px2rem(width, 40);
  }

  .card-info {
    display: flex;
    justify-content: space-between;
  }

  .info-detail {
    display: flex;
  }

  .info-detail span {
  @include font-dpr(14);
    color: #333333;
  @include px2rem(margin-right, 40);
  }

  .info-wrap img {
  @include px2rem(width, 46);
  @include px2rem(height, 46);
  @include px2rem(margin-right, 16);
  }

  .icon-item {
  @include px2rem(padding-left, 64);
  @include font-dpr(14);
    margin-right: 0 !important;
    color: #333333 !important;
  }

  .icon-order {
    background: url("../assets/dingdan.png") no-repeat left center;
  @include px2rem(background-size, 33, 34);
  }

  .icon-intro {
    background: url("../assets/xiangqing.png") no-repeat left center;
  @include px2rem(background-size, 34, 34);
  }

  .icon-group {
    background: url("../assets/shequ.png") no-repeat left center;
  @include px2rem(background-size, 35, 35);
  }

  .icon-consume {
    background: url("../assets/xiaofei.png") no-repeat left center;
  @include px2rem(background-size, 35, 42);
  }

  .icon-service {
    background: url("../assets/fuwu.png") no-repeat left center;
  @include px2rem(background-size, 35, 42);
  }

  .qqs-myvip-page .vip-tab-menu {
  @include px2rem(margin-top, 20);
  @include px2rem(margin-bottom, 20);
  @include px2rem(padding-left, 30);
    background: #fff
  }

  .qqs-myvip-page .vip-tab-menu .tab-item {
  @include font-dpr(14);
  @include px2rem(line-height, 88);
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  @include px2rem(height, 88);
    color: #333;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .qqs-myvip-page .vip-tab-menu .tab-item i {
  @include px2rem(margin-right, 20);
  @include px2rem(padding-top, 2);
    vertical-align: middle
  }

  .qqs-myvip-page .vip-tab-menu .tab-item:active {
    color: #666;
    background: #e5e5e5
  }

  .qqs-myvip-page .vip-tab-menu .item-tip-info {
  @include font-dpr(12);
  @include px2rem(padding-right, 20);
    position: relative;
  @include px2rem(margin-right, 30);
    color: #b2b2b2
  }

  .qqs-myvip-page .vip-tab-menu .item-tip-info:after {
    position: absolute;
    top: 50%;
    right: 0;
    display: inline-block;
  @include px2rem(width, 12);
  @include px2rem(height, 12);
  @include px2rem(margin-top, - 8);
    content: '';
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  @include px2rem(border-width, 4, 4, 0, 0);
    border-style: solid;
    border-color: #b2b2b2
  }
</style>
