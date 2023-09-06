<script setup>
const { getItems } = useDirectusItems();
let items
const fetchArticles = async () => {
  try {
    let items1 = await getItems({
      collection: "mediathek",
    });
    console.log(items1);
    items = items1;
  } catch (e) { }
};
fetchArticles();
console.log(items);

</script>

<template>
  <VApp theme="dark">
    {{ items }}
    ss
  </VApp>
</template>