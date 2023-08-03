<template>
    <VContainer>
        Details {{ $route.params.id }}
        info: {{ items2 }}
    </VContainer>
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