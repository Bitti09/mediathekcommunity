<template>
    <v-container fluid>
        <v-card title="Zuletzt hinzugefügt" variant="outlined">
            <swiper-container slides-per-view="2" space-between="0" loop="false" breakpoints="{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                }
            }">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide>
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
        <v-card title="Deutsche Mediatheken" variant="outlined" v-show="grouped.includes('de')">
            <swiper-container :slides-per-view="auto" :space-between="spaceBetween" :centered-slides="false" :breakpoints="{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                }
            }" :loop="false">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide v-if="post.country == 'de'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
        <v-card title="Schwedische Mediatheken" variant="outlined" v-show="grouped.includes('sw')">
            <swiper-container :slides-per-view="2" :breakpoints="{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                }
            }" :loop="false">
                <template v-for="(post, i) in posts" :key="post.id">
                    <swiper-slide v-if="post.country == 'sw'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </swiper-slide>
                </template>
            </swiper-container>
        </v-card>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { register } from 'swiper/element/bundle';
import { countBy, keys } from 'lodash-es';
let grouped = ref()
const router = useRouter();
let posts = ref()
const { getItems } = useDirectusItems();
posts.value = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id,listepisodes.*.*'], sort: "-date_created" } });
// import function to register Swiper custom elements
// register Swiper custom elements
register();
 watch(posts, (newValue, oldValue) => {
    if (newValue.length != 0) {
        grouped.value = keys(countBy(newValue, function (newValue) { return newValue.country; }))
    }
}, { immediate: true })
</script>
<script>
export default {
    data: () => ({
        show: false,
        dialog: false,
    })
}

</script>
<style scoped>
.v-card--variant-outlined {
    border: transparent !important;
}
</style>