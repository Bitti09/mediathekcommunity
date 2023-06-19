<template>
    <v-container fluid>
        <v-card title="Zuletzt hinzugefügt" variant="outlined">
            <swiper-container :slides-per-view="4" :loop="true">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide >
                        Index: {{ i }}
                        <Cardhome :posts="post"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
        <v-card title="Deutsche Mediatheken" variant="outlined">
            <swiper-container slides-per-view="4" loop="true">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide v-if="post.country == 'de'">
                        Country from api: {{ post.country }}
                        <Cardhome :posts="post"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
        <v-card title="Schwedische Mediatheken" variant="outlined">
            <swiper-container slides-per-view="4" loop="true">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide v-if="post.country == 'sw'">
                        Country from api: {{ post.country }}
                        <Cardhome :posts="post"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { register } from 'swiper/element/bundle';

const router = useRouter();
const { getItems } = useDirectusItems();
const posts = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id'] } });
const { data: info } = await useFetch('/api/info')
// import function to register Swiper custom elements
// register Swiper custom elements
register();
</script>
<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>
<style scoped>
.v-card--variant-outlined {
    border: transparent !important;
}
</style>