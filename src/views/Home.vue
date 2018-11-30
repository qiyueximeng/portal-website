<template>
  <div class="home">
    <el-carousel
      class="home__carousel"
      height="300px"
      type="card"
    >
      <el-carousel-item class="carousel__item">
        <img class="carousel__img" src="../assets/img1.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item class="carousel__item">
        <img class="carousel__img" src="../assets/img2.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item class="carousel__item">
        <img class="carousel__img" src="../assets/img3.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="home__about-us">
      <h2 class="about-us__title">关于我们</h2>
      <ImageText :data="aboutUsList[0]"></ImageText>
      <ImageText :data="aboutUsList[1]" imgDir="right"></ImageText>
    </div>
    <div class="home__products">
      <h2 class="products__title">产品与服务</h2>
      <div class="products__content">
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
          <div class="products__introduce">
            <h5 class="introduce__title">{{item.title}}</h5>
            <p class="introduce__detail">{{item.detail}}</p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageText from '@/components/ImageText.vue';

import { ImageTextData, ProductData } from '../type/Interfaces';
import { aboutUsDatas } from '../data/aboutList';
import { productDatas } from '../data/productList';


@Component({
  components: {
    ImageText,
  },
})
export default class Home extends Vue {
  public aboutUsList: ImageTextData[];
  public productList: ProductData[];

  constructor() {
    super();
    this.aboutUsList = aboutUsDatas;
    this.productList = productDatas;
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__products {
    background: #2E2E2E;
    padding: 30px 0;
  }
}

.carousel {
  &__item {
    
  }
  &__img {
    width: 100%;
  }
}

.about-us {
  &__title {
    text-align: center;
    margin-bottom: 20px;
  }
}

.products {
  &__title {
    color: #FFF;
    text-align: center;
    margin-bottom: 30px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 300px;
    margin-left: 25px;
    margin-top: 30px;
    border: 1px solid #2E2E2E;
    box-sizing: border-box;

    &:nth-child(-n+3) {
      margin-top: 0;
    }
    
    &:hover {
      border-color: transparent;
    }
  }

  &__img-box {
    height: 250px;
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

    .introduce__title {
      margin-bottom: 10px;
    }
    .introduce__detail {
      font-size: 12px;
      color: #999;
      width: 280px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

