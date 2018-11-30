<template>
  <div class="production">
      <div class="products">
        <el-card
          v-for="(item, index) of productList"
          :key="index"
          class="products__item"
          shadow="hover"
          :body-style="{ padding: '0' }"
        >
          <div class="products__img-box">
            <img class="products__img" :src="item.img" alt="产品图">
          </div>
          <div class="products__introduce">{{item.title}}</div>
        </el-card>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProductData } from '../type/Interfaces';

const productDatas: ProductData[] = [
  {
    title: '供应链管理',
    detail: '供应链管理,供应链管理,供应链管理,供应链管理,供应链管理,供应链管理',
    img: `${process.env.BASE_URL}img3.jpg`,
    link: '/production'
  },
  {
    title: '增值服务',
    detail: '增值服务,增值服务,增值服务',
    img: '/img3.jpg',
    link: '/production'
  },
  {
    title: '供应链管理',
    detail: '供应链管理,供应链管理,供应链管理,供应链管理,供应链管理,供应链管理',
    img: '/img3.jpg',
    link: '/production'
  },
  {
    title: '增值服务',
    detail: '增值服务,增值服务,增值服务,增值服务,增值服务,增值服务',
    img: '/img3.jpg',
    link: '/production'
  }
];

@Component({
  components: {},
})
export default class Production extends Vue {
  public productList: ProductData[];
  
  constructor() {
    super();
    this.productList = productDatas;
  }
}
</script>
<style lang="scss" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;

  &__item {
    width: 240px;
    margin-left: 8px;
    margin-top: 30px;
    border: 1px solid transparent;
    box-sizing: border-box;

    &:nth-child(-n+4) {
      margin-top: 0;
    }
  }

  &__img-box {
    height: 180px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s linear;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  &__introduce{
    padding: 10px;
    text-align: center;
  }
}
</style>

