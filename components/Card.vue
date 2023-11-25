<template >
  <UCard class="max-w-md">
    <template #header>
        header
    </template>

    <img :src="showflag1(carddata)" alt="image" />

    <template #footer>
        footer
    </template>
  </UCard>
</template>
<script >
export default {
    props: ['carddata', 'showflag'],
    data() {
        return {
            show: true,
        }
    },
    methods: {
        showflag1(carddata) {
            return carddata.poster ? 'https://img.mediathek.community/t/p/original/' + carddata.poster : 'https://img2.mediathek.community/assets/' + carddata.coverimage.id
        }
    }
}
</script>
<style>

.swiper-slide {
    flex-shrink: 1!important
}
</style>
