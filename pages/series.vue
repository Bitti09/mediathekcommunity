<template>
  <v-container fluid>
    <v-card title="Zuletzt hinzugefügt" variant="outlined">
      <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
        400: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 0,
        }
      }"> <template v-for="(post, i) in posts" :key="post.id">
          <SwiperSlide>
            <Cardhome :posts="post" :showtype="true"></Cardhome>
          </SwiperSlide>
        </template>
      </Swiper>
    </v-card>
    <v-card title="Deutsche Mediatheken" variant="outlined">
      <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
        400: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 0,
        }
      }">
        <template v-for="(post, i) in posts" :key="post.id">
          <SwiperSlide v-if="post.country == 'de'">
            <Cardhome :posts="post" :showtype="true"></Cardhome>
          </SwiperSlide>
        </template>
      </Swiper>
    </v-card>
    <v-card title="Schwedische Mediatheken" variant="outlined" v-show="grouped.includes('sw')">
      <Swiper :slides-per-view="auto" :space-between="0" :loop="false" :breakpoints="{
        400: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 0,
        }
      }"> <template v-for="(post, i) in posts" :key="post.id">
          <SwiperSlide v-if="post.country == 'sw'">
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
const filters = { type: "series" };

posts.value = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id,listepisodes.*'], filter: filters, sort: "-date_created" } });
const { data: info } = await useFetch('/api/info')
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