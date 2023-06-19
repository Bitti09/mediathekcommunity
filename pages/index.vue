<template>
    <v-container fluid>
        <v-card title="Zuletzt hinzugefügt" variant="outlined">
            {{ height1 }} - {{ name }}
            <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide>
                        <Cardhome :posts="post" :showtype="true" :width1="width1" :height1="height1"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Deutsche Mediatheken" variant="outlined" v-show="grouped.includes('de')">
            <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide v-if="post.country == 'de'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Schwedische Mediatheken" variant="outlined" v-show="grouped.includes('sw')">
            <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
                <template v-for="(post, i) in posts" :key="post.id">
                    <SwiperSlide v-if="post.country == 'sw'">
                        <Cardhome :posts="post" :showtype="true"></Cardhome>
                    </SwiperSlide>
                </template>
            </Swiper>
        </v-card>
        <v-card title="Italienische Mediatheken" variant="outlined" v-show="grouped.includes('it')">
            <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
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
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
const height1 = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
        case 'xxl': return 1200
    }

    return undefined
})
const width1 = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
        case 'xs': return 300
        case 'sm': return 600
        case 'md': return 700
        case 'lg': return 900
        case 'xl': return 1200
        case 'xxl': return 1200
    }

    return undefined
})
const router = useRouter();
let posts = ref()
let grouped = ref()
const breaks = {
    0: {
        slidesPerView: 1,
        spaceBetween: 1,
    },
    490: {
        slidesPerView: 2,
        spaceBetween: 1,
    },
    960: {
        slidesPerView: 3,
        spaceBetween: 1,
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 1,
    },
    1900: {
        slidesPerView: 5,
        spaceBetween: 1,
    },
    2300: {
        slidesPerView: 6,
        spaceBetween: 1,
    },
}
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