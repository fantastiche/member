<template>
  <div class="content">
    <div class="card-list">
      <router-link class="item" :to="{name:'cardDetail',params:{type:1}}">
        <div class="img lever1"></div>
        <div class="info">
          <div class="text">
            <div class="card-name">注册会员</div>
            <div class="point-lever">积分倍率：无</div>
          </div>
          <div class="text">
            <div class="account">累积消费额：<span>无</span></div>
            <div class="validity">有效期：永久</div>
          </div>
        </div>
      </router-link>
      <router-link class="item" :to="{name:'cardDetail',params:{type:2}}">
        <div class="img lever2"></div>
        <div class="info">
          <div class="text">
            <div class="card-name">千千氏女生卡</div>
            <div class="point-lever">积分倍率：1</div>
          </div>
          <div class="text">
            <div class="account">累积消费额：<span>1-4000</span></div>
            <div class="validity">有效期：永久</div>
          </div>
        </div>
      </router-link>
      <router-link class="item" :to="{name:'cardDetail',params:{type:3}}">
        <div class="img lever3"></div>
        <div class="info">
          <div class="text">
            <div class="card-name">千千氏女皇卡</div>
            <div class="point-lever">积分倍率：1.2</div>
          </div>
          <div class="text">
            <div class="account">累积消费额：<span>4001-15000</span></div>
            <div class="validity">有效期：1年</div>
          </div>
        </div>
      </router-link>
      <router-link class="item" :to="{name:'cardDetail',params:{type:4}}">
        <div class="img lever4"></div>
        <div class="info">
          <div class="text">
            <div class="card-name">千千氏女神卡</div>
            <div class="point-lever">积分倍率：1.5</div>
          </div>
          <div class="text">
            <div class="account">累积消费额：<span>15001-无上限</span></div>
            <div class="validity">有效期：1年</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {
      detail: function (type) {
        this.$router.push({})
      }
    },
    created: function () {
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '../common/sass/base.scss';

  .content {
    @include px2rem(padding-bottom, 30);
    background: #f3f5f7;
  }

  .item {
    display: block;
    @include px2rem(margin-top, 30);
    .img {
      @include px2rem(width, 708);
      @include px2rem(height, 304);
      margin: 0 auto;
      background-color: #fff;
    }
    .lever1 {
      background: url(../assets/lever1.png) no-repeat center center;
      background-size: 100% 100%;
    }
    .lever2 {
      background: url(../assets/lever2.png) no-repeat center center;
      background-size: 100% 100%;
    }
    .lever3 {
      background: url(../assets/lever3.png) no-repeat center center;
      background-size: 100% 100%;
    }
    .lever4 {
      background: url(../assets/lever4.png) no-repeat center center;
      background-size: 100% 100%;
    }
  }

  .info {
    .text {
      @include font-dpr(12);
      @include px2rem(line-height, 56);
      display: flex;
      box-sizing: border-box;
      @include px2rem(width, 710);
      @include px2rem(height, 65);
      margin: 0 auto;
      @include px2rem(padding, 0, 20, 0, 20);
      background: #fff;
      justify-content: space-between;
    }
  }

</style>
