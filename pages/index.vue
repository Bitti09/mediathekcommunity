<template>
    <v-container fluid>
        <v-card title="Zuletzt hinzugefügt" variant="outlined">
            <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
                400: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                }
            }">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide>
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Deutsche Mediatheken" variant="outlined" v-show="grouped.includes('de')">
            <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
                400: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                }
            }">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide v-if="post.country == 'de'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Schwedische Mediatheken" variant="outlined" v-show="grouped.includes('sw')">
            <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
                400: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                }
            }">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide v-if="post.country == 'sw'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Italienische Mediatheken" variant="outlined" v-show="grouped.includes('it')">
            <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
                400: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 0,
                }
            }">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide v-if="post.country == 'it'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { countBy, keys } from 'lodash-es';
const router = useRouter();
let posts = ref()
let grouped = ref()

const { getItems } = useDirectusItems();
posts.value = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id,listepisodes.*.*'], sort: "-date_created" } });
// import function to register Swiper custom elements
// register Swiper custom elements
watch(posts, (newValue, oldValue) => {
    if (newValue.length != 0) {
        grouped.value = keys(countBy(newValue, function (newValue) { return newValue.country; }))
    }/**/
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