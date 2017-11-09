<template>
  <div class="content">
    <span class="remind border-1px">请输入信息领取会员卡</span>
    <div class="info border-1px">
      <div class="info-item border-1px">
        <span>姓名</span>
        <input type="text" placeholder="请填写您的真实姓名">
      </div>
      <div class="info-item border-1px">
        <span>性别</span>
        <input type="text" placeholder="请选择性别" @click="choose">
      </div>
      <div class="info-item border-1px">
        <span>生日</span>
        <popup-picker v-if="dateShow" :data="date" v-model="dateValue" :columns="2"></popup-picker>
      </div>
      <div class="info-item border-1px">
        <span>手机号</span>
        <input type="text" placeholder="请填写正确的手机号">
      </div>
      <div class="info-item" style="position: relative">
        <span>验证码</span>
        <input type="text" placeholder="请填写验证码">
        <div class="code">获取验证码</div>
      </div>
    </div>
    <div class="submit">
      <div @click="submit">提交</div>
    </div>
    <actionsheet v-model="sexShow" :menus="sexMenu" @on-click-menu="chooseSex"></actionsheet>
  </div>
</template>

<script>
  import {Actionsheet, PopupPicker} from 'vux'

  export default {
    components: {
      Actionsheet,
      PopupPicker
    },
    data: function () {
      return {
        sex: '',
        sexShow: false,
        sexMenu: {
          female: this.$t('女'),
          male: this.$t('男')
        },
        date: [],
        dateShow: true,
        dateValue: []
      }
    },
    methods: {
      chooseSex: function (key) {
        console.log(key)
      },
      choose: function () {
        console.log(this.sexShow)
        this.sexShow = true
      },
      birthday: function () {
        this.dateShow = true
      },
      submit: function () {
        console.log(this.date)
      }
    },
    created: function () {
      const longMonth = [1, 3, 5, 7, 8, 10, 12]
      const shortMonth = [4, 6, 9, 11]
      for (let i = 1; i <= 12; i++) {
        this.date.push({
          name: '' + i + '月',
          value: 'month' + i,
          parent: 0
        })
        if (longMonth.indexOf(i) > -1) {
          for (let j = 1; j <= 31; j++) {
            this.date.push({
              name: j,
              value: 'day' + j,
              parent: 'month' + i
            })
          }
        }
        if (shortMonth.indexOf(i) > -1) {
          for (let j = 1; j <= 30; j++) {
            this.date.push({
              name: j,
              value: 'day' + j,
              parent: 'month' + i
            })
          }
        }
        if (i === 2) {
          for (let j = 1; j <= 29; j++) {
            this.date.push({
              name: j,
              value: 'day' + j,
              parent: 'month' + i
            })
          }
        }
      }
//      this.date = JSON.stringify(this.date)
//      this.date = JSON.parse(this.date)
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '../common/sass/base.scss';

  .content {
    width: 100%;
    height: 100%;
    background: #f3f5f7;
  }

  .remind {
    display: block;
    @include px2rem(line-height, 70);
    @include px2rem(height, 70);
    @include px2rem(padding-left, 30);
    @include font-dpr(12);
    color: #888;
  }

  .info {
    background: #ffffff;
    @include px2rem(padding-left, 30);
    @include font-dpr(14);
    .info-item {
      @include px2rem(height, 100);
      display: flex;
      @include px2rem(line-height, 100);
      align-items: center;
      input {
        border: none;
        outline: none;
        &::-webkit-input-placeholder {
          @include font-dpr(14);
          color: #b2b2b2;
        }
      }
      span {
        @include px2rem(height, 100);
        @include px2rem(line-height, 100);
        @include px2rem(width, 180);
        color: #333;
      }
    }
  }

  .code {
    @include px2rem(height, 68);
    @include px2rem(line-height, 68);
    border: 1px #ff4a83 solid;
    @include px2rem(padding, 0, 30);
    @include px2rem(border-radius, 8);
    @include font-dpr(12);
    color: #ff4a83;
    position: absolute;
    @include px2rem(right, 30);
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-align: center;
  }

  .submit {
    @include px2rem(margin-top, 40);
    @include px2rem(padding, 0, 30);
    div {
      @include font-dpr(16);
      @include px2rem(height, 80);
      @include px2rem(line-height, 80);
      background: #ff4a83;
      text-align: center;
      color: #ffffff;
      @include px2rem(border-radius, 10);
    }
  }

  .weui-actionsheet__menu {
    .weui-actionsheet__cell {
      @include px2rem(padding, 20, 0);
      @include font-dpr(18);
    }
  }
  .vux-popup-header{
    .vux-popup-header-right{
      padding-right: 15px;
    }
  }
</style>
