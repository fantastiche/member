<template>
  <div class="content">
    <div class="serve-title">服务记录</div>
    <div class="serve-table-title">
      <div>服务日期</div>
      <div>服务项目</div>
    </div>
    <div class="serve-item border-1px" v-for="item in list">
      <div>{{item.createtime}}</div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  import {
    keyGet,
    _TEST_INTER,
//    _openId,
    TS
  } from '../store/base.js'

  export default {
    data: function () {
      return {
        list: []
      }
    },
    methods: {},
    created: function () {
      let key = keyGet('B00001' + '369403' + 'F0291B40-1B43-4360-A5A7-EBC76CE80680' + TS + '/appmember/getServeRecord.do')
      let params = {
        PAGE: 1,
        SHOPCODE: 'B00001',
        ID: '369403',
        DEVICECODE: 'F0291B40-1B43-4360-A5A7-EBC76CE80680',
        TS: TS,
        KEY: key
      }
      let that = this
      this.$http.get(_TEST_INTER + 'qqs/appmember/getServeRecord.do', {params: params}).then(function (res) {
        that.list = res.data.pd
      })
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '../common/sass/base.scss';

  .serve-title {
    background: #f3f5f7;
    @include px2rem(height, 60);
    @include px2rem(line-height, 60);
    color: #888;
    @include font-dpr(12);
    @include px2rem(padding-left, 30);
  }

  .serve-table-title {
    display: flex;
    background: #ffe6ee;
    @include px2rem(height, 90);
    @include px2rem(line-height, 90);
    @include font-dpr(15);
    color: #333;
    border-bottom: 1px solid #ff4a83;
    div {
      width: 50%;
      text-align: center;
      &:first-child {
        border-right: 1px solid #fff;
      }
    }
  }

  .serve-item {
    display: flex;
    @include px2rem(height, 80);
    @include px2rem(line-height, 80);
    @include font-dpr(14);
    color: #666;
    background: #ffffff;
    div {
      text-align: center;
      width: 50%;
      &:first-child {
        border-right: 1px solid #dbdbdb;
      }
    }
  }
</style>
