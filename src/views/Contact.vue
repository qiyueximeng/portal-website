<template>
  <div class="contact">
    <div class="path-way">
      <div class="path-way__item path-way__address">
        <img class="path-way__icon address__icon" src="../assets/map.png" alt="地址">
        <span class="path-way__text address__text">中国北京市东城区某某大厦8-88室</span>
      </div>
      <div class="path-way__item path-way__telephone">
        <img class="path-way__icon telephone__icon" src="../assets/call.png" alt="电话">
        <span class="path-way__text telephone__text">400xxx8888</span>
      </div>
      <div class="path-way__item path-way__mail">
        <img class="path-way__icon mail__icon" src="../assets/mail.png" alt="邮件">
        <span class="path-way__text mail__text">name@example.xxx</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
.contact {
  padding: 30px 0;
}
.path-way {
  display: flex;
  justify-content: space-around;

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  &__icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  &__text {
    
  }
}
</style>

