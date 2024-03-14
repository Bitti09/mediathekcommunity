<template>
  <div>
    {{ item }}
  </div>
</template>

<script lang="ts" setup>
const { getItemById } = useDirectusItems();

const route = useRoute()
console.log(route.params.id)

const item = await getItemById({
      collection: "mediathek",
      id: route.params.id,
    });
</script>

<style>

</style>