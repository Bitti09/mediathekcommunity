<template>
    <div>
        <swiper-container ref="containerRef" :loop="false" navigation="true" pagination="false" slides-per-view="1"
            autoHeight="true" centered-slides="false">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" height="250">
                <ULandingHero :title="data[0].name" :description="data[0].overview" orientation="horizontal">
                    <template #default>
                        <NuxtImg provider="bunny" :src="data[0].poster" height="450" :quality="90" />
                    </template>
                </ULandingHero>
            </swiper-slide>
        </swiper-container>

        <swiper-container ref="containerRef" :loop="false" navigation="true" pagination="true" slides-per-view="4"
            autoHeight="true" centered-slides="false">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" height="250">
                Slide {{ idx + 1 }}<a :href="'/details/' + data[0].id">
                    <NuxtImg provider="bunny" :src="data[0].poster" height="250" width="200" :quality="90" />
                </a>
            </swiper-slide>
        </swiper-container>
    </div>
</template>
<script setup>
import { register } from 'swiper/element/bundle';

register();

const containerRef = ref(null)
const slides = ref(Array.from({ length: 12 }))
onMounted(() => {
    // Access Swiper instance
    // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
    console.log(swiper.instance)
})
const { getItems } = useDirectusItems();
const grouped = ref([]);
const grouped2 = ref([]);
const data = await getItems({
    collection: "mediathek",
})
grouped.value = useKeys(
    useCountBy(data, function (data) {
        return data.country;
    })
);
grouped2.value = useGroupBy(data, (item) => item.country);

const { isDashboardSidebarSlidoverOpen } = useUIState()
console.log(isDashboardSidebarSlidoverOpen.value)
const title1 = isDashboardSidebarSlidoverOpen.value ? 'Mediathek Community - Home' : 'Home'
</script>
<style>
swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: auto;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

.swiper-slide {
    height: auto;
}
</style>