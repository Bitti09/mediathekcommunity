<template>
  <v-container fluid>
    <v-card title="Zuletzt hinzugefügt" variant="outlined">
      <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
        <template v-for="(post, i) in posts" :key="post.id">
          <SwiperSlide>
             <Cardhome :posts="post" :showtype="true"></Cardhome>
          </SwiperSlide>
        </template>
      </Swiper>
    </v-card>
     <v-card :title="$t('category.de')" variant="outlined" v-show="grouped.includes('de')">
      <Swiper :slides-per-view="0" :space-between="0" :loop="false" :breakpoints="breaks">
        <template v-for="(post, i) in posts" :key="post.id">
          <SwiperSlide v-if="post.country == 'de'">
            <Cardhome :posts="post" :showtype="true"></Cardhome>
          </SwiperSlide>
        </template>
      </Swiper>
    </v-card>
    <v-card :title="$t('category.sw')" variant="outlined" v-show="grouped.includes('sw')">
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
import { register } from 'swiper/element/bundle';
import { countBy, keys } from 'lodash-es';
let grouped = ref()
let posts = ref()
const router = useRouter();
const { getItems } = useDirectusItems();
const filters = { type: "music" };
const breaks = {
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
posts.value = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id'], filter: filters, sort: "-date_created" } });
// import function to register Swiper custom elements
// register Swiper custom elements
register();
watch(posts, (newValue, oldValue) => {
  if (newValue.length != 0) {
    grouped.value = keys(countBy(newValue, function (newValue) { return newValue.country; }))
  }
}, { immediate: true })
</script>
<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>
<style scoped>
.v-card--variant-outlined {
  border: transparent !important;
}
</style>