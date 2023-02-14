<template>
  <div class="detail">
    <!-- 这是头部 -->
    <van-sticky>
      <div class="detail-head">
      <van-icon name="wap-home-o" @click="$router.push('/')"/>
      <div class="head-title">网 易 严 选</div>
      <div>
        <van-icon name="search" @click="$router.push('/search')"/>
        <van-icon name="shopping-cart-o" @click="$router.push('/shopCart')"/>
      </div>
    </div>
    </van-sticky>
    <!-- 这是内容 -->
    <div class="detail-content">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in skuImageList" :key="image.id">
            <img :src="image.imgUrl" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <!-- 金额 -->
      <div class="detail-money">
        <div class="time">每日抄底 | 距结束<van-count-down :time="time" /></div>
        <div class="money">
          <div class="moneyone"><span>¥</span>{{ price }}</div>
          <div class="moneytwo"><span>到手¥</span>{{Math.floor(price*0.8)}}</div>
        </div>
      </div>
      <!-- 商品介绍 -->
      <div style="padding: 20px 15px 0;margin-bottom: 10px; background-color: #fff;">
        <div class="detail-introduce">
          <!-- 详情 -->
          <div class="particulars">
            <p>{{skuName}}</p>
            <div class="simpleBrandInfo">
              <img class="imgone" src="https://yanxuan.nosdn.127.net/6366944e4ac00118969787dedf9520e7.png" alt="">
              <img class="imgtwo" src="https://yanxuan-item.nosdn.127.net/953fd27555b9382e9d3d656a54398953.png" alt="">
              <span class="title">网易严选</span>
            </div>
          </div>
          <!-- 好评 -->
          <div class="acclaim">
            <div class="percentage">
              <p class="num">99.6%</p>
              <p class="title">好评率</p>
            </div>
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 推荐理由 -->
        <div class="recommend">
          <p class="recom">推荐理由</p>
          <div class="recomItem">
            <p><span>①</span> 新疆长绒棉朵，天生柔软</p>
            <p><span>②</span> 仅售1/2建议价，更高性价比</p>
            <p><span>③</span> 针织面料，高档内衣般裸睡感</p>
          </div>
        </div>
      </div>
      <!-- 其他版块 -->
      <!-- 1 -->
      <div class="otherOne">
        <div class="One">
          <van-cell is-link title="邮费: 满99包邮" @click="oneshow = true" />
          <van-action-sheet v-model:show="oneshow" title="邮费">
            <div class="content">
              <h4>♡ 满99元免邮</h4>
              <p>本商品由严选自营仓发货，单笔订单金额（不含邮费）大陆地区满99元免邮费，不满99元收取8元邮费；港澳台地区满500元免邮费，不满500元收取30元邮费；海外地区以下单页提示运费为准。</p>
            </div>
          </van-action-sheet>
        </div>
        <div class="Two">
          <van-cell is-link title="促销: 每满1件领取赠品"/>
        </div>
        <div class="Three">
          <van-cell is-link title="购物返: 最高返18积分" @click="twoshow = true" style="border-bottom: none"/>
          <van-action-sheet v-model:show="twoshow" title="什么是购物返">
            <div class="content">
              <h4>♡ 关于购物返回馈金：</h4>
              <p>
                1. 回馈金是严选用以回馈用户的代币<br/>
                2. 回馈金可与现金1:1抵扣使用<br/>
                3. 回馈金使用无门槛，可叠加<br/>
                4. 购物即可返还回馈金，用户等级越高，返还比例越高<br/>
                5. 本月获取的回馈金，统一在次月25日23:59:59失效，请尽快使用<br/>
                6. 可在个人中心--回馈金中查看回馈金资产<br/>
                7. 部分特殊商品和订单不支持返还回馈金，具体以回馈金的活动说明为准<br/>
                8. 如有疑问，请联系严选在线客服
              </p>
              <h4>♡ 关于购物返积分：</h4>
              <p>
                1. 用户在严选主站购物，确认收货后按商品售价的10%返购物积分<br/>
                2. 购物返积分数值精确到个位（小数点后全部舍弃，不进行四舍五入）<br/>
                3. 拼团/众筹/砍价/虚拟商品和礼品卡支付商品订单不支持返积分<br/>
                4. 购买礼品卡订单不返积分，礼品卡消费时，按照实际消费额度进行积分返赠<br/>
                5. 如商品订单完成后退货，则在退货流程发起后24小时内对该笔订单发放的积分数进行扣除<br/>
                6. 可在【帮助中心】-积分规则查看详细说明<br/>
                7. 如有疑问，请联系严选在线客服
              </p>
            </div>
          </van-action-sheet>
        </div>
      </div>   
      <!-- 2 -->
      <div class="otherOne">
        <div>
          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="请选择规格数量"
            @click="threeshow = true"
          />
          <van-popup v-model:show="threeshow" round position="bottom">
            <div class="content" style="padding:16px 16px;">
              <!-- 头部 -->
              <van-sticky :offset-top="0">
                <div class="content-head">
                  <img :src="skuDefaultImg" alt=""/>
                  <div class="head-title">
                    <p class="huang">每日抄底</p>
                    <p class="hong">价格: ¥ {{price}} 到手 ¥ {{Math.floor(price*0.8)}}</p>
                    <p style="margin:0 0 5px;color: black;">
                      已选择:&nbsp;<span v-for="spuData in spuValue" :key="spuData.id">{{ spuData.saleAttrValueName }}</span>&nbsp;{{ value == 0 ? '' : value }}
                    </p>
                  </div>
                </div>
              </van-sticky>
              <!-- 内容 -->
              <div class="content-main">
                <div v-for="spu in spuSaleAttrList" :key="spu.id">
                  <h4>♡ {{ spu.saleAttrName }}</h4>
                  <ul v-for="spuSale in spu.spuSaleAttrValueList" :key="spuSale.id">
                    <li class="kuang" :class="{'active':spuSale.isChecked == 1}" @click="changeActive(spu,spuSale)">{{ spuSale.saleAttrValueName }}</li>
                  </ul>
                </div>  
                <van-stepper v-model="value" min="0" style="margin: 11px 0;"/>
                <van-button type="primary" block style="background-color: #FA1E32; border:#FA1E32" @click="changeGOgwc">添加购物车</van-button>
              </div>
            </div>
          </van-popup>
        </div>
        <div>
          <van-cell is-link title="限制: 特价商品不可能与优惠券叠加使用" />
        </div>
        <div>
          <van-field
              v-model="fieldValue"
              is-link
              readonly
              label="配送:"
              placeholder="请选择配送地址"
              @click="fiveshow = true"
            />
          <van-popup v-model:show="fiveshow" round position="bottom">
          <van-cascader
                v-model="cascaderValue"
                title="请选择所在地区"
                :options="options"
                @close="fiveshow = false"
                @finish="onFinish"
              />
          </van-popup>
        </div>
        <div>
          <van-cell is-link title="服务: ♡ 严选自营 ♡ 7天无忧退换" @click="sixshow = true" style="border-bottom: none"/>
          <van-action-sheet v-model:show="sixshow" title="邮费">
            <div class="content">
              <h4>♡ 严选自营</h4>
              <p>商品均为网易严选自营，品质保证</p>
              <h4>♡ 7天无忧退换</h4>
              <p>顾客在收货之日起7天内保证商品完好、附件齐全的情况下，可发起无忧退换货，具体规则请参见帮助中心-退换货政策</p>
              <h4>♡ 部分规格不可用券</h4>
              <p>该商品正在参与促销活动，活动不可与优惠券叠加</p>
              <h4>♡ 不享受学生折扣</h4>
              <p>该商品不支持享受学生特权优惠</p>
              <h4>♡ 国内部分地区不可配送</h4>
              <p>省份：香港、西藏、澳门、台湾省</p>
            </div>
          </van-action-sheet>
        </div>
      </div>
      <!-- 3 底部轮播-->
      <div class="otherswipe">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item v-for="img in imgs" :key="img">
            <img :src="img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 详情图 -->
      <div class="otherimg" v-for="img in skuImageList" :key="img">
        <img :src="img.imgUrl" alt="">
      </div>
    </div>
    <van-tabbar >
      <van-tabbar-item icon="phone-o" style="color: black;"></van-tabbar-item>
      <van-tabbar-item @click="threeshow = true">立即购买</van-tabbar-item>
      <van-tabbar-item style="background-color: #DD1A21; color: #fff;" @click="threeshow = true">加入购物车</van-tabbar-item>
    </van-tabbar>
    <van-back-top />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Search'
}
</script>

<script lang="ts" setup>
import { Icon, Swipe, SwipeItem ,CountDown,ActionSheet,Cascader, Tabbar, TabbarItem,Sticky ,Stepper,BackTop} from 'vant';
import { useCascaderAreaData } from '@vant/area-data';
import { computed, onMounted, reactive, ref } from 'vue';
import {AddDataInfo, getListData} from '@/Api/detail/index'
import router from '@/router';
import path from 'path';
const imgs = [
  'https://yanxuan.nosdn.127.net/static-union/16757405327dac66.jpg?quality=75&type=webp&imageView&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/static-union/16735909049b6f42.jpg?quality=75&type=webp&imageView&thumbnail=750x0',
]
const time = ref(30 * 60 * 60 * 1000);//倒计时
const value = ref(0); //步进器
const spuIndex = ref(0);  //选中的下标
const oneshow = ref(false);
const twoshow = ref(false);
const threeshow = ref(false);
const fiveshow = ref(false);
const sixshow = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
const options = useCascaderAreaData();
const onFinish = ({ selectedOptions }) => {
  fiveshow.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join('/');
};
const spuSaleAttrList = ref([]);  //商品的版本等
const price = ref() //商品的金额
const skuImageList = ref([]);  //图片
const skuName = ref();//商品的名字
const skuDefaultImg = ref();//商品的主图片
const skuId = ref();  //商品的id

const spuValue = ref([])

// id的数组
const idArr = [1,2,3,22,5,6,7,8,9,30,11,12,13,28,15,16,17,18,19,20];
// 1. 随机出现一个id
const id = computed(()=>{
  let j = Math.floor((Math.random()*10));
  return idArr[j]
})
// console.log(id.value);

// 2.用随机出现的id获取数据
const getData = async () => {
  const res = await getListData(id.value)
  // console.log(res);
  // console.log(res.data.skuInfo);
  spuSaleAttrList.value = res.data.spuSaleAttrList;  //商品的版本等
  // console.log(skuInfo.value);
  skuImageList.value = res.data.skuInfo.skuImageList;//图片
  price.value = res.data.skuInfo.price;  //商品的金额
  skuName.value = res.data.skuInfo.skuName//商品的名字
  skuDefaultImg.value = res.data.skuInfo.skuDefaultImg //商品的主图片
  skuId.value = res.data.skuInfo.id;//商品的id
}
// 3.改变点中li 的样式(保存下标)
const changeActive = (spu,spuSale) => {
  // spuIndex.value = index
  // 排他
  spu.spuSaleAttrValueList.map((item:any)=>{
     item.isChecked = 0
  }
)
// 取反
  spuSale.isChecked = !spuSale.isChecked;
  // console.log(spuSale);
  
  // 获取数据
  if(spuSale.isChecked == 1){
    // 判断长度是否为0
    if(spuValue.value.length === 0){
      spuValue.value.push(spuSale);
    } else {
      // 长度不为0时
      spuValue.value.forEach((val)=> {
        // 判断baseSaleAttrId是否相等
        if(spuSale.baseSaleAttrId == val.baseSaleAttrId){
          // // 相等的话用新的覆盖掉旧的
          // Object.assign(val,spuSale)
          // console.log(1)
          return;
        } else {
          // 不相等的话直接添加
          // console.log(2)
          spuValue.value.push(spuSale);
        }
      })
    }
      
  }
  console.log(spuValue.value);
}
// 4.添加购物车并跳转
const changeGOgwc = async () => {
  await AddDataInfo(skuId.value,value.value) ;
  router.push(
    {path: '/shopCart'}
  )
}

onMounted(()=>{
  getData();
})
</script>

<style lang="less">
:root:root {
  --van-back-top-right: 6px;
  --van-back-top-bottom: 50px;
  --van-back-top-background:#FDFBFA;
  --van-back-top-text-color: #8B8B8B;
}
</style>

<style lang="less" scoped>
.van-cell--clickable {
  border-bottom: #E4E4E4 2px solid;
  padding-left: 0;
  margin-left: 16px;
  width: 95.8%;
}
.detail{
  width: 100%;
  background-color: #F4F4F4;
  overflow:auto;
  // 这是头部 
  .detail-head {
    display: flex;
    justify-content: space-between;
    padding: 0 8px 0 12px;
    height: 43px;
    align-items: center;
    background-color: #fff;
    position: sticky;
    top: 0;
    .head-title {
      flex: 1;
      font-size: 18px;
      font-weight: 600;
      margin: auto;
      text-align: center;
    }
    .van-icon-search {
      margin-right: 15px;
    }
  }
  // 这是内容
  .detail-content {
    // 轮播图 
    .van-swipe {
      width: 100%;
      height: 375px;
      .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: white;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 金额
    .detail-money {
      background-color: #FA1E32;
      padding: 10px 15px;
      .time {
        display: flex;
        font-size: 12px ;
        color: white ;
        :deep(.van-count-down){
          font-size: 12px ;
          color: white ;
          line-height:18px
        }
      }
      .money {
        display: flex;
        margin-top: 4px;
        .moneyone {
          color: white;
          font-weight:bold;
          font-size: 28px;
          span {
            font-size: 20px;
          }
        }
        .moneytwo {
          height: 23px;
          line-height: 23px;
          font-size: 17px;
          font-weight: 600;
          color: #FA1E32;
          background-color: #fff;
          border-radius: 30px;
          margin: 4px 0 0 3px;
          text-align: center;
          padding: 0 4px;
          span {
            font-size: 12px;
            margin-right: 2px;
          }
        }
      }
    }
    // 介绍
    .detail-introduce {
      display: flex;
      justify-content: space-between;
      // 详情
      .particulars {
        p {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }
        .simpleBrandInfo {
          margin-top: 5px;
          height: 30px;
          display: flex;
          align-items: center;
          .imgone {
            width: 32px;
            height: 16px;
            margin-right: 5px;
          }
          .imgtwo {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
          span {
            font-size: 13px;
            color: #7f7f7f;
            line-height: 10px;
          }
        }
      }
      // 好评
      .acclaim {
        display: flex;
        align-items: center;
        .percentage {
          font-size: 12px;
          color: #7f7f7f;
          .num {
            font-size: 16px;
            color: #DD1A21;
            font-weight: 600;
            margin-bottom: 0;
          }
          .title {
            margin-top: 2px;
          }
        }
        .van-icon-arrow {
          color: #7f7f7f;
          font-size: 12px;
        }
      }
    }
    // 推荐
    .recommend {
      padding-bottom:15px ;
      .recom {
        font-size: 12px;
        color: #7f7f7f;
        margin-top: 0;
      }
      .recomItem {
        font-size: 12px;
        border: 1px solid #E8E8E8;
        background-color: #FAFAFA;
        padding: 5px 10px ;
        color: #333333;
        p {
          margin: 0 0 3px 0;
          span {
            font-weight: 600;
            color:#DD1A21;
            font-size: 13px;
          }
        }
      }
    }
    // 其他版块
    .otherOne {
      background-color: #fff;
      margin-bottom: 10px;
      :deep(.van-field__label) {
        width: 100px;
      }
      .content {
        padding: 16px 16px 160px;
        // padding-right: 16px;
        border-top:1px solid #E4E4E4;
        .content-head {
          display: flex;
          margin-bottom: 15px;
          background-color: #fff;
          img {
            width: 100px;
            height: 100px;
            margin-right: 10px;
          }
          .huang {
            font-size: 12px;
            margin-bottom: 0;
            margin-top: 30px;
            background: #F48F18;
            width: 56px;
            text-align: center;
            color: #fff;
            border-radius: 10px;
            padding-right: 0;
          }
          .hong {
            color: #DD1A21;
            margin: 5px 0;
          }
        }
        .content-main {
            height: 350px;
            overflow: auto;
          }
        .kuang {
          border: 1px solid;
          min-width:20%;
          max-width:186px;
          color: #6e6e6e;
          font-size: 14px;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 5px;
        }
        .active {
            border: 1px solid #DD1A21;
            color:#DD1A21
          }
        h4 {
          color: #333333;
          font-weight: normal;
          font-size: 15px;
          margin-top: 0;
        }
        span {
          margin-right: 4px;
        }
        p {
          color:#7F7F7F;
          font-size: 14px;
          padding-right: 16px
        }
      }
    }
    // 3 底部轮播
    .otherswipe {
      .van-swipe {
        height: 100px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 5 详情图
    .otherimg {
      // width: 100%;
      height: 590px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      margin: 18px;
      // margin-bottom: 50px;
    }
  }
  .van-tabbar {
    // position: relative;
    // z-index: 999;
    .van-tabbar-item {
      border: 1px solid #DEDEDE;
      font-size: 14px;
    }
  }
}
</style>