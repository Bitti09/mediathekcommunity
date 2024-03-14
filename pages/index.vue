<template>
    <div>
        <Splide :options="{ perPage: 1, perMove: 1, type: 'loop' }" aria-labelledby="My Favorite Videos">
            <SplideSlide v-for="(slide, idx) in slides" :key="idx" height="250">

                <ULandingHero :title="data[0].name" :description="data[0].overview" orientation="horizontal">
                    <template #default>
                        <NuxtImg provider="bunny" :src="data[0].poster" height="450" :quality="90" />
                    </template>
                </ULandingHero>
            </SplideSlide>

        </Splide>
        <Splide :options="{ perPage: 8, perMove: 4, type: 'slide', rewind: true }" aria-labelledby="My Favorite Videos">
            <SplideSlide v-for="(slide, idx) in slides" :key="idx" height="250">
                Slide {{ idx + 1 }}<a :href="'/details/' + data[0].id">
                    <NuxtImg provider="bunny" :src="data[0].poster" height="250" width="200" :quality="90" />
                </a>
            </SplideSlide>

        </Splide>
    </div>
</template>
<script setup>
 const slides = ref(Array.from({ length: 12 }))
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