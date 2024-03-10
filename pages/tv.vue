<template>
    <div>
        {{ data }}
        <NuxtImg provider="bunny" :src="data[0].poster" height="250" width="200" :quality="90" />
        {{ grouped2 }}
        {{ grouped }}
    </div>
</template>
<script setup>
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