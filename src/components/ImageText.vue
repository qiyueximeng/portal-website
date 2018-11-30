<template>
    <el-row class="image-text" :gutter="30">
        <el-col class="image-text__left" :span="14" v-if="imgDir === 'right'">
            <h3 class="image-text__title" v-if="data.title">{{data.title}}</h3>
            <p class="image-text__content">{{data.content}}</p>
            <el-button class="image-text__link" @click="textLinkHandler" type="primary" plain>{{data.btnText}}</el-button>
        </el-col>
        <el-col :span="10">
            <img class="image-text__img" :src="data.imgLink" alt="">
        </el-col>
        <el-col class="image-text__right" :span="14" v-if="imgDir === 'left'">
            <h3 class="image-text__title" v-if="data.title">{{data.title}}</h3>
            <p class="image-text__content">{{data.content}}</p>
            <el-button class="image-text__link" @click="textLinkHandler" type="primary" plain>{{data.btnText}}</el-button>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ImageTextData } from '../type/Interfaces';


@Component
export default class ImageText extends Vue {
    @Prop(Object)
    private data!: ImageTextData;

    @Prop({
        type: String,
        default: 'left'
    })
    private imgDir!: string;

    public textLinkHandler(): void {
        const link = this.data.btnLink;
        this.$router.push(link);
    }
}
</script>

<style lang="scss" scoped>
    .image-text {
        padding: 20px 0;

        &__img {
            width: 100%;
        }

        &__title {
            margin-bottom: 20px;
        }

        &__content {
            margin-bottom: 15px;
        }
    }
</style>
