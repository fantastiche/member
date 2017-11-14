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
        <input type="text" placeholder="请选择性别" @click="choose" v-model="sex">
      </div>
      <div class="info-item border-1px">
        <span>生日</span>
        <x-button v-bind:class="{active: dateValueFlag}" @click.native="showPopupPicker = true" type="primary">
          {{dateValue[0] + dateValue[1] }}
        </x-button>
      </div>
      <!--<group>-->
      <!--<popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :data="[['1', '2', '3', '4', '5']]"-->
      <!--v-model="value5"></popup-picker>-->
      <!--</group>-->
      <group>
        <popup-picker v-if="dateShow" :data="date" v-model="dateValue" :columns="2" :show.sync="showPopupPicker"
                      :title="birthdayTitle" :show-cell="false"></popup-picker>
      </group>
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
  import {Actionsheet, PopupPicker, Group, XButton} from 'vux'

  export default {
    components: {
      Actionsheet,
      PopupPicker,
      XButton,
      Group
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
        birthdayTitle: '请选择您的生日',
        dateValue: ['请选择您的生日', ''],
        dateValueFlag: false,
        showPopupPicker: false,
        value5: ['2']
      }
    },
    watch: {
      dateValue: function (newVal, oldVal) {
        this.dateValueFlag = true
      }
    },
    methods: {
      chooseSex: function (key) {
        if (key === 'male') {
          this.sex = '男'
        } else {
          this.sex = '女'
        }
      },
      choose: function () {
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
          value: i + '月',
          parent: 0
        })
        if (longMonth.indexOf(i) > -1) {
          for (let j = 1; j <= 31; j++) {
            this.date.push({
              name: j + '日',
              value: j + '日',
              parent: i + '月'
            })
          }
        }
        if (shortMonth.indexOf(i) > -1) {
          for (let j = 1; j <= 30; j++) {
            this.date.push({
              name: j + '日',
              value: j + '日',
              parent: i + '月'
            })
          }
        }
        if (i === 2) {
          for (let j = 1; j <= 29; j++) {
            this.date.push({
              name: j + '日',
              value: j + '日',
              parent: i + '月'
            })
          }
        }
      }
//      this.$watch()
//      this.date = JSON.stringify(this.date)
//      this.date = JSON.parse(this.date)
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '../common/sass/base.scss';

  button:active {

  }

  .weui-cell {
    padding: 0 !important;
  }

  .vux-no-group-title {
    margin-top: 0 !important;
  }

  .info-item {
    .weui-btn {
      @include font-dpr(14);
      color: #b2b2b2;
      background-color: #fff !important;
      text-align: left;
      @include px2rem(padding-left, 40);
      &:after {
        display: none;
      }
    }
  }

  .weui-btn_primary:active {
    background: #fff;
    color: #b2b2b2 !important;
  }

  .vux-popup-header-right {
    color: #ff4a83 !important;
  }

  .vux-cell-box:before {
    display: none;
  }

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

  .active {
    color: #333 !important;
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

  .vux-popup-header {
    .vux-popup-header-right {
      padding-right: 15px;
    }
  }
</style>
