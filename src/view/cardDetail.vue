<template>
  <div class="content">
    <div class='table border-1px'>
      <table>
        <tbody>
        <tr>
          <td>卡名称</td>
          <td class='card-name'>{{card.name}}</td>
        </tr>
        <tr>
          <td>累计消费额</td>
          <td>{{card.countNum}}</td>
        </tr>
        <tr>
          <td>积分倍率</td>
          <td>{{card.countNum}}</td>
        </tr>
        <tr>
          <td>有效期</td>
          <td>{{card.validity}}</td>
        </tr>
        <tr>
          <td>积分兑换产品</td>
          <td>{{card.changeProduct}}</td>
        </tr>
        <tr>
          <td>积分抵现金</td>
          <td>{{card.exchangeMoney}}</td>
        </tr>
        <!--<tr>-->
        <!--<td>千媛会</td>-->
        <!--<td>无</td>-->
        <!--</tr>-->
        </tbody>
      </table>
    </div>
    <div class="state-text border-1px">
      <span>会员等级权益</span>
      <span>{{card.degreeRight[0]}}</span>
      <span>{{card.degreeRight[1]}}</span>
    </div>
    <div class="state-text">
      <span>会员卡使用规定</span>
      <span>{{card.userRegular[0]}}</span>
      <span>{{card.userRegular[1]}}</span>
      <span>{{card.userRegular[2]}}</span>
    </div>
  </div>
</template>

<script>
  const typeDetail = [
    {
      'name': '注册会员卡',
      'countNum': '无',
      'rate': '无',
      'validity': '永久有效',
      'changeProduct': '无',
      'exchangeMoney': '无',
      'qianyuanhui': '无',
      'degreeRight': [
        '1、凡于生日当天凭身份证消费每满300立减100，每满600立减200，以此类推【不享受会员折扣、积分与优惠券】。',
        '2、积分抵现金换算比例为：100积分=7元。'
      ],
      'userRegular': [
        'a、会员卡只限本人使用，转借他人无效；',
        'b、会员等级由系统自动升级（达到相应积分后次日生效）；',
        'c、会员卡最终解释权归广州千千氏公司（可在法律法规允许范围修改）。'
      ]
    },
    {
      'name': '千千氏女生卡',
      'countNum': '1-4000',
      'rate': '1',
      'validity': '永久有效',
      'changeProduct': '可享',
      'exchangeMoney': '无',
      'qianyuanhui': '可享',
      'degreeRight': [
        '1、凡于生日当天凭身份证消费每满300立减100，每满600立减200，以此类推【不享受会员折扣、积分与优惠券】。',
        '2、积分抵现金换算比例为：100积分=7元。'
      ],
      'userRegular': [
        'a、会员卡只限本人使用，转借他人无效；',
        'b、会员等级由系统自动升级（达到相应积分后次日生效）；',
        'c、会员卡最终解释权归广州千千氏公司（可在法律法规允许范围修改）。'
      ]
    },
    {
      'name': '千千氏女皇卡',
      'countNum': '4001-15000',
      'rate': '1.2',
      'validity': '1年',
      'changeProduct': '可享',
      'exchangeMoney': '可享',
      'qianyuanhui': '可享',
      'degreeRight': [
        '1、凡于生日当天凭身份证消费每满300立减100，每满600立减200，以此类推【不享受会员折扣、积分与优惠券】。',
        '2、积分抵现金换算比例为：100积分=7元。',
        '3、会员有效期1年，一年后扣除3000累积消费额，根据剩余累积消费额重新计算级别'
      ],
      'userRegular': [
        'a、会员卡只限本人使用，转借他人无效；',
        'b、会员等级由系统自动升级（达到相应积分后次日生效）；',
        'c、会员卡最终解释权归广州千千氏公司（可在法律法规允许范围修改）。'
      ]
    },
    {
      'name': '千千氏女神卡',
      'countNum': '15001-无上限',
      'rate': '1.5',
      'validity': '1年',
      'changeProduct': '可享',
      'exchangeMoney': '可享',
      'qianyuanhui': '可享',
      'degreeRight': [
        '1、凡于生日当天凭身份证消费每满300立减100，每满600立减200，以此类推【不享受会员折扣、积分与优惠券】。',
        '2、积分抵现金换算比例为：100积分=7元。',
        '3、会员有效期1年，一年后扣除5000累积消费额，根据剩余累积消费额重新计算级别'
      ],
      'userRegular': [
        'a、会员卡只限本人使用，转借他人无效；',
        'b、会员等级由系统自动升级（达到相应积分后次日生效）；',
        'c、会员卡最终解释权归广州千千氏公司（可在法律法规允许范围修改）。'
      ]
    }
  ]

  export default {
    data: function () {
      return {
        card: {}
      }
    },
    methods: {},
    created: function () {
      if (this.$route.params.type) {
        let index = parseInt(this.$route.params.type) - 1
        this.card = typeDetail[index]
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import '../common/sass/base.scss';

  .content {
    background: #fff;
  }

  .table {
    @include px2rem(padding-left, 30);
    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      tr {
        @include px2rem(padding, 0, 30);
        border-bottom: 1px solid #e5e5e5;
        &:last-child {
          border: none;
        }
        td {
          @include font-dpr(14);
          @include px2rem(line-height, 104);
          @include px2rem(height, 104);
          &:first-child {
            width: 42%;
            color: #888;
          }
          &:last-child {
            color: #323232;
          }
        }
        .card-name {
          color: #fe007f !important;
        }
      }
    }
  }

  .state-text {
    position: relative;
    @include px2rem(padding, 30);
    color: #333;
    span {
      display: block;
      @include font-dpr(14);
      @include px2rem(line-height, 44);
      &:first-child {
        @include font-dpr(16);
        @include px2rem(padding-bottom, 10);
      }
    }
  }
</style>
