<template>
  <UPage>
    <UAlert icon="i-heroicons-command-line" color="primary" variant="subtle" title="Heads up!"
      description="You can add components to your app using the cli." />
    <UButton to="/test">Button</UButton>
    <swiper-container init="false" class="'mySwiper2" :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1900: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      2300: {
        slidesPerView: 7,
        spaceBetween: 0
      }
    }">
      <swiper-slide v-for="slide in data.all" :key="slide">
        <Card :carddata="slide" />

      </swiper-slide>
    </swiper-container>

    <swiper-container v-for="(group, key) in data.keyz" :key="key" class="'mySwiper2" :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1900: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      2300: {
        slidesPerView: 7,
        spaceBetween: 0
      }
    }">
      <swiper-slide v-for="slide1 in data.grouped[group]" :key="slide">
        <Card :carddata="slide1" />

      </swiper-slide>
    </swiper-container>
  </UPage>
</template>
<script setup>
let data = ref();
const route = useRoute()

if (!route.params.id) {
  data = await $fetch('/api/index')
} else {
  data = await $fetch('/api/' + route.params.id)
}
const swiperParams = {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    490: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    2300: {
      slidesPerView: 7,
      spaceBetween: 0
    }
  },
  on: {
    init() {
      // ...
    }
  }
};
onMounted(async () => {
  const swiperEl = document.querySelectorAll('swiper-container');
  for (let i = 0; i < swiperEl.length; i++) {
    Object.assign(swiperEl[i], swiperParams);
    swiperEl[i].initialize();
  }
}
);
</script>