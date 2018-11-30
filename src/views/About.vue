<template>
  <div class="about">
    <div class="description">
      <div class="description__text">
        <p
          v-for="(description, index) of descriptionList"
          :key="index"
        >{{description}}</p>
      </div>
      <img class="description__img" src="../assets/img3.jpg" alt="介绍图" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const descriptionData: string[] = [
  'XXX物流有限公司是一家专注于国内干线运输、货物仓储、市区配送、物流解决方案策划与设计的国家5A级综合物流企业。',
  '公司以福州为总部，设立东、南、西、北4大区域，拥有215家分公司，仓储总面积65万平方米，自有货车1300多辆，长期加盟的社会车辆10000辆。公司自成立以来，先后获得中国物流百强企业、中国民营物流企业十强、全国制造业与物流业联动发展示范企业、国家甩挂运输试点单位、全国公路零担快运三十强（第五名）、范重点物流企业等多项荣誉称号。',
  '公司始终奉行“珍惜所托，一如亲送”的服务宗旨，为2000多家大中型生产制造企业和商贸企业提供优质高效的物流服务，国内外知名企业的主要物流合作伙伴。',
  '公司通过推进全国物流网点布局，打造夕发朝至的城际甩挂运输精品快运线路，提供仓储、包装、加工、搬运、装卸、代收货款、信息化数据共享等增值服务，不断提升物流运作能力和服务品质，努力建设成为中国领先的、值得尊敬和信赖的综合物流合作伙伴。'
]

@Component
export default class About extends Vue {
  public descriptionList: string[];

  constructor() {
    super();
    this.descriptionList = [];
  }

  public created() {
    this.descriptionList = descriptionData;
  }
}
</script>
<style lang="scss" scoped>
.description {
  padding: 30px 0;
  display: flex;
  border-top: 1px dotted #666;
  border-bottom: 1px dotted #666;

  &__text {
    flex: 1;

    &>p {
      text-indent: 2em;
      margin-bottom: 7px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__img {
    width: 450px;
    height: 350px;
    margin-left: 20px;
  }
}
</style>

