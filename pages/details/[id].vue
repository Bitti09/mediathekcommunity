<template>
    Details {{ $route.params.id }}
    info: {{ items2 }}
    <Swiper :slides-per-view="1" :loop="true" :breakpoints="breaks">
        <SwiperSlide v-for="slide in 10" :key="slide">
            <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                <strong>{{ slide }}</strong>
            </v-card>
        </SwiperSlide>
    </Swiper>
    <Swiper :slides-per-view="1" :loop="true" :breakpoints="breaks">
        <SwiperSlide v-for="slide in 10" :key="slide">
            <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
                <template v-slot:title>
                    This is a title
                </template>

                <v-card-text>
                    This is content
                </v-card-text>
            </v-card>
        </SwiperSlide>
    </Swiper>
    <Swiper :slides-per-view="1" :loop="true" :breakpoints="breaks">
        <SwiperSlide v-for="slide in 20" :key="slide">
            <v-card class="mx-auto" max-width="344">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                <strong>{{ slide }}</strong>
            </v-card>
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
const route = useRoute()
const routeid = route.params.id
const { getItems } = useDirectusItems();
const items2 = ref(null);
let params = {
    fields: ['*', 'listepisodes.*'],
    filter: { id: routeid }
}
const breaks = {
    0: {
        slidesPerView: 1,
        spaceBetween: 1
    },
    490: {
        slidesPerView: 2,
        spaceBetween: 1
    },
    960: {
        slidesPerView: 3,
        spaceBetween: 1
    },
    1280: {
        slidesPerView: 4,
        spaceBetween: 1
    },
    1900: {
        slidesPerView: 5,
        spaceBetween: 1
    },
    2300: {
        slidesPerView: 6,
        spaceBetween: 1
    }
}
const { data, pending, error, refresh } = await useAsyncData("notes", () => {
    return getItems({ collection: "mediathek", params });
});
console.log(pending)
onMounted(() => {
    items2.value = data.value[0];
});

if (route.params.group === 'admins' && !route.params.id) {
    console.log('Warning! Make sure user is authenticated!')
}
</script>