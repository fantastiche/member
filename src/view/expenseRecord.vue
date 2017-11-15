<template>
  <div class="content">
    <div class="expense-title border-1px">消费记录</div>
    <div class="item border-1px" v-for="item in list">
      <img :src="item.SPICTURE" alt="">
      <div class="item-detail">
        <div class="item-detail-top-wrap">
          <div class="item-title">{{item.GOODSLNAME}}</div>
          <div class="item-num">×{{item.sl}}</div>
        </div>
        <div class="item-per">￥{{item.je/item.sl}}.00/件</div>
        <div class="item-detail-bottom-wrap">
          <div class="item-sum">共计：<span>￥{{item.je}}.00</span></div>
          <div class="item-date">{{item.createtime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {structureKey, TS} from '../util/util'
  import {expenseRecordHttp} from '../models/common-model'

  export default {
    data: function () {
      return {
        list: []
      }
    },
    methods: {},
    created: function () {
      let that = this
      let key = structureKey('B00001' + '369403' + 'F0291B40-1B43-4360-A5A7-EBC76CE80680' + TS + '/appmember/getExpenseRecord.do')
      let params = {
        PAGE: 1,
        SHOPCODE: 'B00001',
        ID: '369403',
        DEVICECODE: 'F0291B40-1B43-4360-A5A7-EBC76CE80680',
        TS: TS,
        KEY: key
      }
      expenseRecordHttp(params, function (res) {
        that.list = res.data.pd
      }, function () {
      })
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '../common/sass/base.scss';

  .expense-title {
    background: #f3f5f7;
    @include px2rem(height, 60);
    @include px2rem(line-height, 60);
    color: #888;
    @include font-dpr(12);
    @include px2rem(padding-left, 30);
  }

  .item {
    @include px2rem(padding, 20, 30);
    display: flex;
    background: #fff;
    img {
      @include px2rem(width, 160);
      @include px2rem(height, 160);
      background: #000;
    }
    .item-detail {
      flex-grow: 1;
      @include px2rem(margin-left, 30);
      .item-detail-top-wrap {
        display: flex;
        justify-content: space-between;
        .item-title {
          @include font-dpr(15);
          color: #333;
        }
        .item-num {
          @include font-dpr(14);
          color: #333;
        }
      }
      .item-per {
        @include font-dpr(12);
        @include px2rem(margin-top, 20);
        color: #333;
      }
      .item-detail-bottom-wrap {
        display: flex;
        justify-content: space-between;
        @include px2rem(margin-top, 30);
        .item-sum {
          @include font-dpr(14);
          color: #333;
          span {
            color: #ff4a83;
          }
        }
        .item-date {
          @include font-dpr(12);
          color: #888;
        }
      }
    }
  }
</style>
