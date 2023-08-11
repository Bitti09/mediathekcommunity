<script setup lang="ts">
const { getItems } = useDirectusItems();
const route = useRoute()
let params = {}
console.log(route.params.category)

const { data, pending, error, refresh } = await useAsyncData("notes", () => {
    return getItems({ collection: "mediathek", params: params });
}, {
    watch: [route]
});
const items2 = ref(null);
let keyz = ref(null);
let grouped = ref(null);
watch(route, (newValue, oldValue) => {
    if (route.params.category != "special" && route.params.category != "") {
        params = {
            fields: ['*', 'listepisodes.*'],
            filter: { "category": route.params.category },
            sort: ['-date_created']
        }
    } else if (route.params.category == "special") {
        params = {
            fields: ['*', 'listepisodes.*', 'specials.*'],
            filter: { special: true },
            sort: ['-date_created']
        }
    } else {
        params = {
            fields: ['*', 'listepisodes.*'],
            sort: ['-date_created']
        }
    }
    console.log(data)
    items2 = data.value
    const d1 = data.value
    console.log(d1)
    if (route.params.category != "special") {
        grouped = useGroupBy(d1, (item) => item.country);
    } else {
        grouped = useGroupBy(d1, (item) => item.specials.Name);
    }
    keyz = Object.keys(grouped);
    console.log(newValue)
    refreshNuxtData()
    refresh()
})
console.log(pending)
onMounted(() => {
    if (route.params.category != "special" && route.params.category != "") {
    params = {
        fields: ['*', 'listepisodes.*'],
        filter: { "category": route.params.category },
        sort: ['-date_created']
    }
} else if (route.params.category == "special") {
    params = {
        fields: ['*', 'listepisodes.*', 'specials.*'],
        filter: { special: true },
        sort: ['-date_created']
    }
} else {
    params = {
        fields: ['*', 'listepisodes.*'],
        sort: ['-date_created']
    }
}
    console.log(data)
    items2.value = data.value;
    const d1 = data.value
    console.log(d1)
    if (route.params.category != "special") {
        grouped.value = useGroupBy(d1, (item) => item.country);
    } else {
        grouped.value = useGroupBy(d1, (item) => item.specials.Name);
    }
    keyz = Object.keys(grouped.value);
    console.log(keyz)
    refreshNuxtData()
    refresh()
});

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

</script>

<template>
    <div>
        <h1>Latest</h1>
        <Swiper :slides-per-view="1" :loop="true" :breakpoints="breaks">
            <SwiperSlide v-for="slide in  items2" :key="slide">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                    <strong>{{ slide.title }}</strong>
                </v-card>
            </SwiperSlide>
        </Swiper>
    </div>
    {{ $route.params }}
    <div v-for="i in  keyz">
        <h1>{{ i }}</h1>
        <Swiper :slides-per-view="1" :loop="false" :breakpoints="breaks">
            <SwiperSlide v-for="slide in grouped[i]" :key="slide">
                <v-card class="mx-auto" max-width="344">
                    <v-img v-if="slide.poster" src="https://img.mediathek.community/t/p/originalcarddata.poster"
                        height="200px" cover></v-img>
                    <v-img v-else src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                    <strong>{{ slide.title }}</strong>
                </v-card>
            </SwiperSlide>
        </Swiper>
    </div>
</template>